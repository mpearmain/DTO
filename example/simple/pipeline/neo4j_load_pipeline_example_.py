"""
Extension to building a simple Component - we now load this object into a neo4J database
Assumes you have neo4j instance installed: https://neo4j.com/download-center/#community


"""

import json
from dtocomponent.component import Component, SubComponent
from dtocomponent.graph import Neo4jConnector


def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path) as file:
        return json.load(file)


# Loading the JSON schemas for each subcomponent
specification_schema = load_json('./example/simple/pipeline/schemas/specification_schema.json')
implementation_schema = load_json('./example/simple/pipeline/schemas/implementation_schema.json')
infrastructure_schema = load_json('./example/simple/pipeline//schemas/infrastructure_schema.json')

# Load metadata from JSON files
specification_metadata = load_json('./example/simple/pipeline/pipeline_config/specification_config.json')
implementation_metadata = load_json('./example/simple/pipeline/pipeline_config/implementation_config.json')
infrastructure_metadata = load_json('./example/simple/pipeline/pipeline_config/infrastructure_config.json')

# Create SubComponent instances
specification = SubComponent(schema=specification_schema)
implementation = SubComponent(schema=implementation_schema)
infrastructure = SubComponent(schema=infrastructure_schema)

# Load instances from metadata
specification.load_instance(specification_metadata)
implementation.load_instance(implementation_metadata)
infrastructure.load_instance(infrastructure_metadata)

# Create a Component instance
pipeline = Component(name='data_pipeline', specification=specification, implementation=implementation,
                     infrastructure=infrastructure)

# Get the combined configuration
configuration = pipeline.configure()
print(list(configuration['data_pipeline'].keys()))
print(configuration)  # Print or use the combined configuration as needed

# Connect to Neo4j and write the component configuration
uri = "bolt://localhost:7687"  # Replace with your Neo4j URI
user = "neo4j"  # Replace with your Neo4j username
password = "test1234"  # Replace with your Neo4j password

# Initialize the connector
connector = Neo4jConnector(uri, user, password)

# Generate the Cypher queries
queries = connector.generate_cypher_queries(configuration)
print(queries)
# Execute the Cypher queries on the Neo4j database
connector.execute_cypher_queries(queries)

# Close the connection
connector.close()