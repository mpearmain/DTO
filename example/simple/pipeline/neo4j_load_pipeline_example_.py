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


def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path) as file:
        return json.load(file)


# Define paths for schemas and metadata
paths = {
    "specification": {
        "schema": './example/simple/pipeline/schemas/specification_schema.json',
        "metadata": './example/simple/pipeline/pipeline_config/specification_config.json'
    },
    "implementation": {
        "schema": './example/simple/pipeline/schemas/implementation_schema.json',
        "metadata": './example/simple/pipeline/pipeline_config/implementation_config.json'
    },
    "infrastructure": {
        "schema": './example/simple/pipeline/schemas/infrastructure_schema.json',
        "metadata": './example/simple/pipeline/pipeline_config/infrastructure_config.json'
    },
    "data": {
        "schema": './example/simple/pipeline/schemas/data_schema.json',
        "metadata": './example/simple/pipeline/pipeline_config/data_config.json'
    }
}

subcomponents = {}

# Loop through each component, load schema and metadata, and create SubComponent instances
for key, path_info in paths.items():
    schema = load_json(path_info["schema"])
    metadata = load_json(path_info["metadata"])

    subcomponent = SubComponent(schema=schema)
    subcomponent.load_instance(metadata)

    subcomponents[key] = subcomponent

# Create a Component instance using the subcomponents dictionary
pipeline = Component(name='data_pipeline',
                     specification=subcomponents['specification'],
                     implementation=subcomponents['implementation'],
                     infrastructure=subcomponents['infrastructure'],
                     data=subcomponents['data']
)
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