from neo4j import GraphDatabase
from typing import Dict, Any, List, Tuple


class Neo4jConnector:
    """
    A class to manage the connection to a Neo4j graph database.
    """

    def __init__(self, uri: str, user: str, password: str):
        """
        Initialize the Neo4j connector with connection details.

        Parameters:
        - uri (str): The connection URI for the Neo4j database.
        - user (str): The username for the Neo4j database.
        - password (str): The password for the Neo4j database.
        """
        self._driver = GraphDatabase.driver(uri, auth=(user, password))

    def test_connection(self) -> None:
        """Test the connection to the Neo4j database."""
        with self._driver.session() as session:
            result = session.run("RETURN 'Hello, World!' AS greeting")
            print(result.single()["greeting"])

    def close(self) -> None:
        """Close the connection to the Neo4j database."""
        self._driver.close()

    def generate_cypher_queries(self, component: Dict[str, Any]) -> List[str]:
        """
        Generate the Cypher queries using the GraphBuilder.

        Parameters:
        - component (Dict[str, Any]): The input data structure.

        Returns:
        - List[str]: The list of generated Cypher queries.
        """
        builder = GraphBuilder()
        return builder.generate_cypher(component)

    def execute_cypher_queries(self, queries: List[str]) -> None:
        """
        Execute a list of Cypher queries on the Neo4j database.

        Parameters:
        - queries (List[str]): The list of Cypher queries to execute.
        """
        with self._driver.session() as session:
            for query in queries:
                session.run(query)


class GraphBuilder:
    """A class to generate Cypher commands from a given nested dictionary."""

    @staticmethod
    def _create_node(label: str, properties: Dict[str, Any] = None) -> Tuple[str, str]:
        """
        Create a node Cypher command.

        Parameters:
        - label (str): The label of the node.
        - properties (Dict[str, Any], optional): The properties of the node.

        Returns:
        - Tuple[str, str]: The Cypher command and the alias of the node.
        """
        alias = label.replace(' ', '_').lower()
        if properties:
            props = ', '.join(f'{k}: "{v}"' if isinstance(v, str) else f'{k}: {v}' for k, v in properties.items())
            return f'CREATE ({alias}:{label} {{{props}}})', alias
        else:
            return f'CREATE ({alias}:{label})', alias

    @staticmethod
    def _create_relationship(parent_alias: str, child_alias: str, rel_type: str) -> str:
        """
        Create a relationship Cypher command.

        Parameters:
        - parent_alias (str): The alias of the parent node.
        - child_alias (str): The alias of the child node.
        - rel_type (str): The type of the relationship.

        Returns:
        - str: The Cypher command for the relationship.
        """
        return f'CREATE ({parent_alias})-[:{rel_type}]->({child_alias})'

    def generate_cypher(self, data: Dict[str, Any], parent_alias: str = None, relationship: str = "Subcomponent") -> \
    List[str]:
        """
        Generate Cypher commands based on the input data.

        Parameters:
        - data (Dict[str, Any]): The input data structure.
        - parent_alias (str, optional): The alias of the parent node.
        - relationship (str, optional): The type of the relationship.

        Returns:
        - List[str]: The list of generated Cypher commands.
        """
        queries = []

        for key, value in data.items():
            # Handle simple key-value attributes
            if not isinstance(value, dict):
                if parent_alias:
                    properties = {'value': value}
                    query, alias = self._create_node(key, properties=properties)
                    queries.append(query)
                    queries.append(self._create_relationship(parent_alias, alias, relationship))
            # Handle "Type" keyword
            elif "Type" in value:
                node_label = value["Type"]
                properties = {k: v for k, v in value.items() if k != "Type" and not isinstance(v, dict)}
                query, alias = self._create_node(node_label, properties=properties)
                queries.append(query)
                if parent_alias:
                    queries.append(self._create_relationship(parent_alias, alias, f'HAS_{key}'))
                nested_queries = self.generate_cypher(value, parent_alias=alias)
                queries.extend(nested_queries)
            # Handle special keywords
            elif key in ["Resources", "Configuration", "Details"]:
                nested_queries = self.generate_cypher(value, parent_alias=parent_alias, relationship=f'HAS_{key}')
                queries.extend(nested_queries)
            else:
                properties = {k: v for k, v in value.items() if not isinstance(v, dict)}
                query, alias = self._create_node(key, properties=properties)
                queries.append(query)
                if parent_alias:
                    queries.append(self._create_relationship(parent_alias, alias, relationship))
                nested_queries = self.generate_cypher(value, parent_alias=alias)
                queries.extend(nested_queries)

        return queries
