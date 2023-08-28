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
        self.base_parser = BaseParser(self.tx)

    def parse(self, data: Dict[str, Any]):
        # There's only one top-level key, the name of the component
        component_name = list(data.keys())[0]
        component_data = data[component_name]

        for schema_type, schema_data in component_data.items():
            node_id = self.base_parser._create_node({}, schema_type)
            for key, value in schema_data.items():
                self.base_parser._process_value(node_id, key, value)


class BaseParser:
    """
    A base parser class that contains common methods for creating nodes and relationships in Neo4j.
    """

    def __init__(self, tx):
        self.tx = tx

    def _create_node(self, properties: Dict[str, Any], label: str) -> int:
        """
        Create a node in the Neo4j database with the provided properties and label.
        """
        props = {k: v for k, v in properties.items() if not isinstance(v, (dict, list))}
        result = self.tx.run("CREATE (n:" + label + " $props) RETURN id(n)", props=props)
        node_id = result.single()[0]
        return node_id

    def _create_relationship(self, parent_node_id: int, child_node_id: int, rel_type: str) -> None:
        """
        Create a relationship between two nodes in the Neo4j database.
        """
        self.tx.run(f"MATCH (p), (n) WHERE id(p) = $parent_id AND id(n) = $child_id CREATE (p)-[:{rel_type}]->(n)",
                    parent_id=parent_node_id, child_id=child_node_id)

    def parse(self, data: Dict[str, Any]):
        # Create the root node (e.g., "Specification")
        root_node = self._create_node({}, list(data.keys())[0])

        # Process the inner dictionary (e.g., "Attributes" or "Dependencies")
        for key, value in data[list(data.keys())[0]].items():
            self._process_value(root_node, key, value)

    def _process_value(self, parent_node, key, value):
        if isinstance(value, dict):
            # Check if the key is one of the special keys like 'Type', 'Configuration', etc.
            if key in ['Type', 'Configuration', 'Resource', 'Details']:
                child_node = self._create_node({}, key)  # Create a node with the key's name
                self._create_relationship(parent_node, child_node, key)
                for sub_key, sub_value in value.items():
                    self._process_value(child_node, sub_key, sub_value)
            else:
                child_node = self._create_node({}, key)
                self._create_relationship(parent_node, child_node, "HAS")
                for sub_key, sub_value in value.items():
                    self._process_value(child_node, sub_key, sub_value)
        elif isinstance(value, list):
            for item in value:
                self._process_value(parent_node, key, item)
        else:
            value_node = self._create_node({key: value}, key)
            self._create_relationship(parent_node, value_node, key)
