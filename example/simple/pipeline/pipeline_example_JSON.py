"""
This example demonstrates how to create a pipeline by loading JSON schemas and metadata from files.
The SubComponent class is used to define different parts of the pipeline, such as specification, implementation, and
infrastructure.
Each SubComponent requires a JSON schema and metadata that conforms to that schema.

1. JSON schemas are loaded from files to define the structure and validation rules for each subcomponent.
2. Metadata for each subcomponent is loaded from JSON files.
3. SubComponent instances are created for specification, implementation, and infrastructure, and the loaded metadata is
assigned to them.
4. The metadata is automatically validated against the corresponding JSON schema when assigned to a SubComponent.
5. A Component instance is created using the SubComponent instances.
6. The combined configuration of the DTOComponent is retrieved.

The validation ensures that the metadata for each subcomponent adheres to the structure and constraints defined in the
corresponding JSON schema.
"""

import json
from src.DTOComponent import Component, SubComponent


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

# Create SubComponent instances and set metadata directly
specification = SubComponent(schema=specification_schema, type="Specification")
specification.metadata = specification_metadata

implementation = SubComponent(schema=implementation_schema, type="Implementation")
implementation.metadata = implementation_metadata

infrastructure = SubComponent(schema=infrastructure_schema, type="Infrastructure")
infrastructure.metadata = infrastructure_metadata

# Create a Component instance
pipeline = Component(specification=specification, implementation=implementation, infrastructure=infrastructure)

# Get the combined configuration
pipeline.configure()
