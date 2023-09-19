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
        return builder.generate_cypher_commands(component)

    def execute_cypher_queries(self, queries: List[str]) -> None:
        """
        Execute a list of Cypher queries on the Neo4j database.

        Parameters:
        - queries (List[str]): The list of Cypher queries to execute.
        """
        with self._driver.session() as session:
            for query in queries:
                session.run(query)


from typing import Dict, List, Any


class GraphBuilder:
    """
    GraphBuilder class to generate Cypher commands for creating nodes
    and relationships in a Neo4j graph database based on a given nested dictionary structure.
    """
    SPECIAL_KEYWORDS = ["Type", "Resources", "Configuration", "Details"]

    def __init__(self):
        pass  # Empty constructor for now. Can be expanded if needed.

    @staticmethod
    def generate_cypher_commands(data: Dict[str, Any]) -> List[str]:
        """
        Generate Cypher commands based on the given nested dictionary.

        Parameters:
        - data (Dict[str, Any]): Input nested dictionary.

        Returns:
        - List[str]: List of Cypher commands.
        """
        root_key = list(data.keys())[0]
        commands = [GraphBuilder._create_node(root_key, root_key)]
        commands.extend(GraphBuilder._generate_subcomponent_commands(root_key, data[root_key]))
        return commands

    @staticmethod
    def _generate_subcomponent_commands(parent: str, data: Dict[str, Any]) -> List[str]:
        """
        Generate Cypher commands for the subcomponents.

        Parameters:
        - parent (str): Parent node alias.
        - data (Dict[str, Any]): Input nested dictionary.

        Returns:
        - List[str]: List of Cypher commands.
        """
        commands = []
        for key, value in data.items():
            if key not in GraphBuilder.SPECIAL_KEYWORDS:
                if isinstance(value, dict):
                    node_alias = key.lower()
                    commands.append(GraphBuilder._create_node(node_alias, key))
                    commands.append(GraphBuilder._create_relationship(parent, node_alias, "HAS_" + key))
                    commands.extend(GraphBuilder._generate_subcomponent_commands(node_alias, value))
                else:
                    # This is an attribute of the parent node, not a new node.
                    continue
            else:
                # Handle special keywords
                if key == "Type":
                    continue  # We've already used this for node creation
                for subkey, subvalue in value.items():
                    if isinstance(subvalue, dict):
                        subnode_alias = subkey.lower()
                        commands.append(GraphBuilder._create_node(subnode_alias, subkey))
                        commands.append(GraphBuilder._create_relationship(parent, subnode_alias, "HAS_" + subkey))
                        commands.extend(GraphBuilder._generate_subcomponent_commands(subnode_alias, subvalue))
                    else:
                        node_alias = subkey.lower()
                        commands.append(GraphBuilder._create_node(node_alias, subkey, {"value": subvalue}))
                        commands.append(GraphBuilder._create_relationship(parent, node_alias, "HAS_" + key))
        return commands

    @staticmethod
    def _create_node(alias: str, label: str, properties: Dict[str, Any] = None) -> str:
        """
        Create a Cypher command for a node.

        Parameters:
        - alias (str): The alias for the node.
        - label (str): The label of the node.
        - properties (Dict[str, Any], optional): The properties of the node.

        Returns:
        - str: The Cypher command for the node.
        """
        if properties:
            props = ', '.join(f'{k}: "{v}"' if isinstance(v, str) else f'{k}: {v}' for k, v in properties.items())
            return f'CREATE ({alias}:{label} {{{props}}})'
        else:
            return f'CREATE ({alias}:{label})'

    @staticmethod
    def _create_relationship(parent_alias: str, child_alias: str, rel_type: str) -> str:
        """
        Create a Cypher command for a relationship.

        Parameters:
        - parent_alias (str): The alias of the parent node.
        - child_alias (str): The alias of the child node.
        - rel_type (str): The type of the relationship.

        Returns:
        - str: The Cypher command for the relationship.
        """
        return f'CREATE ({parent_alias})-[:{rel_type}]->({child_alias})'
