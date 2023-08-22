import json
from src.component import Component, SubComponent

# Assuming you have the JSON schemas for each subcomponent
specification_schema = {...}
implementation_schema = {...}
infrastructure_schema = {...}

# Load metadata from JSON files
with open('specification_metadata.json') as f:
    specification_metadata = json.load(f)

with open('implementation_metadata.json') as f:
    implementation_metadata = json.load(f)

with open('infrastructure_metadata.json') as f:
    infrastructure_metadata = json.load(f)

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
