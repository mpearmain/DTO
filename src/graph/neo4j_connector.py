from neo4j import GraphDatabase
from typing import Dict, Any


class Neo4jConnector:
    """
    A class to manage the connection to a Neo4j graph database.
    """

    def __init__(self, uri: str, user: str, password: str):
        self._driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self) -> None:
        self._driver.close()

    def write_component(self, component: Dict) -> None:
        with self._driver.session() as session:
            session.write_transaction(self._write_component_tx, component)

    @staticmethod
    def _write_component_tx(tx, component: Dict) -> None:
        component_parser = ComponentParser(tx)
        component_parser.parse(component)


class ComponentParser:
    """
    A helper class to parse the component dictionary and create the corresponding nodes and relationships in Neo4j.
    """

    def __init__(self, tx):
        self.tx = tx

    def parse(self, data: Dict[str, Any], parent_node=None, label: str = 'Component'):
        node = self._create_node(data, label)
        if parent_node:
            self._create_relationship(parent_node, node)
        for key, value in data.items():
            if isinstance(value, dict):
                self.parse(value, node, key)
            elif isinstance(value, list):
                for item in value:
                    if isinstance(item, dict):
                        self.parse({key: item}, node, key)
            else:
                self._add_property_to_node(node, key, value)

    def _create_node(self, data: Dict[str, Any], label: str) -> Any:
        return self.tx.run("CREATE (n:" + label + " $props) RETURN n", props=data).single().value()

    def _create_relationship(self, parent_node, child_node) -> None:
        self.tx.run("CREATE (p)-[:HAS]->(n)", p=parent_node, n=child_node)

    def _add_property_to_node(self, node, key, value) -> None:
        self.tx.run("SET n += {props}", n=node, props={key: value})

