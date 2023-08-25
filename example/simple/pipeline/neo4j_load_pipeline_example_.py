"""
Extension to building a simple Component - we now load this object into a neo4J database
Assumes you have neo4j instance installed: https://neo4j.com/download-center/#community


"""


import json
from component import Component, SubComponent  # Adjust the import path as needed
from graph import Neo4jConnector

def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path) as file:
        return json.load(file)


# Loading the JSON schemas for each subcomponent
specification_schema = load_json('./schemas/specification_schema.json')
implementation_schema = load_json('./schemas/implementation_schema.json')
infrastructure_schema = load_json('./schemas/infrastructure_schema.json')

# Load metadata from JSON files
specification_metadata = load_json('./pipeline_config/specification_config.json')
implementation_metadata = load_json('./pipeline_config/implementation_config.json')
infrastructure_metadata = load_json('./pipeline_config/infrastructure_config.json')

# Create SubComponent instances
specification = SubComponent(schema=specification_schema)
implementation = SubComponent(schema=implementation_schema)
infrastructure = SubComponent(schema=infrastructure_schema)

# Load instances from metadata
specification.load_instance(specification_metadata)
implementation.load_instance(implementation_metadata)
infrastructure.load_instance(infrastructure_metadata)

# Create a Component instance
pipeline = Component(specification=specification, implementation=implementation, infrastructure=infrastructure)

# Get the combined configuration
configuration = pipeline.configure()
print(configuration)  # Print or use the combined configuration as needed

# Load into neo4j and test out - MAKE SURE NEO4J is running!!!"


# Connect to Neo4j and write the component configuration
uri = "bolt://localhost:7687"  # Replace with your Neo4j URI
user = "neo4j"  # Replace with your Neo4j username
password = "test1234"  # Replace with your Neo4j password

connector = Neo4jConnector(uri, user, password)
connector.write_component(configuration)
connector.close()