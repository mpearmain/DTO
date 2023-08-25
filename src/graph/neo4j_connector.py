from neo4j import GraphDatabase
from typing import Dict, Any


class Neo4jConnector:
    """
    A class to manage the connection to a Neo4j graph database.
    """

    def __init__(self, uri: str, user: str, password: str):
        self._driver = GraphDatabase.driver(uri, auth=(user, password))

    def test_connection(self):
        with self._driver.session() as session:
            result = session.run("RETURN 'Hello, World!' AS greeting")
            print(result.single()["greeting"])

    def close(self) -> None:
        self._driver.close()

    def write_component(self, component: Dict) -> None:
        try:
            with self._driver.session() as session:
                session.write_transaction(self._write_component_tx, component)
        except Exception as e:
            print(f"Error writing to Neo4j: {e}")

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
        properties = {k: v for k, v in data.items() if not isinstance(v, (dict, list))}
        node = self._create_node(properties, label)
        if parent_node:
            self._create_relationship(parent_node, node)
        for key, value in data.items():
            if isinstance(value, dict):
                self.parse(value, node, key)
            elif isinstance(value, list):
                for item in value:
                    if isinstance(item, dict):
                        self.parse({key: item}, node, key)

    def _create_node(self, properties: Dict[str, Any], label: str) -> int:
        result = self.tx.run("CREATE (n:" + label + " $props) RETURN id(n)", props=properties)
        node_id = result.single()[0]
        return node_id

    def _create_relationship(self, parent_node_id: int, child_node_id: int) -> None:
        self.tx.run("MATCH (p), (n) WHERE id(p) = $parent_id AND id(n) = $child_id CREATE (p)-[:HAS]->(n)",
                    parent_id=parent_node_id, child_id=child_node_id)
