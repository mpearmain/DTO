"""
This example demonstrates how to create a pipeline by loading JSON schemas and metadata from files.
The SubComponent class is used to define different parts of the pipeline, such as specification, implementation, and
infrastructure.
Each SubComponent requires a JSON schema and metadata that conforms to that schema.

1. JSON schemas are loaded from files to define the structure and validation rules for each subcomponent.
2. Metadata for each subcomponent is loaded from JSON files.
3. SubComponent instances are created for specification, implementation, and infrastructure, and the loaded metadata is
assigned to them.
4. The metadata is validated against the corresponding JSON schema when assigned to a SubComponent.
5. A Component instance is created using the SubComponent instances.

The validation ensures that the metadata for each subcomponent adheres to the structure and constraints defined in the
corresponding JSON schema.
"""
import json
from dtocomponent.component import Component, SubComponent



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
