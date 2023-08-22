"""
This example demonstrates how to create a pipeline by defining different parts such as specification, implementation,
and infrastructure using the SubComponent class. The process involves the following steps:

1. JSON schemas are loaded from files to define the structure and validation rules for each subcomponent.
2. SubComponent instances are created for specification, implementation, and infrastructure, and attributes are set
using dynamically created setter methods.
3. The attributes are automatically validated against the corresponding JSON schema when set using the setter methods.
4. A Component instance is created using the SubComponent instances.
5. The combined configuration of the component is retrieved.

The validation ensures that the attributes for each subcomponent adhere to the structure and constraints defined in the
corresponding JSON schema.
"""

import json
from src.component import Component, SubComponent


def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path) as file:
        return json.load(file)


# Loading the JSON schemas for each subcomponent
specification_schema = load_json('./schemas/specification_schema.json')
implementation_schema = load_json('./schemas/implementation_schema.json')
infrastructure_schema = load_json('./schemas/infrastructure_schema.json')

# Create an instance of SubComponent for Specification, passing the schema to the constructor
specification = SubComponent(schema=specification_schema, type="Specification")
specification \
    .set_name("SampleComponent") \
    .set_version("1.0") \
    .set_description("A sample component for demonstration") \
    # ... other setter methods ...

# Create an instance of SubComponent for Implementation, passing the schema to the constructor
implementation = SubComponent(schema=implementation_schema, type="Implementation")
implementation \
    .set_version("1.0.0") \
    .set_engine("Spark") \
    .set_resources({"CPU": 8, "RAM": "48Gi"}) \
    .set_execution({"JobType": "batch", "ScheduleExecution": "00:00:00", "Interval": "6hrs"}) \
    .set_query("SELECT foo, bar, baz FROM foobar f JOIN baz b ON f.id=b.id WHERE foo.blah > baz.")

# Create an instance of SubComponent for Infrastructure, passing the schema to the constructor
infrastructure = SubComponent(schema=infrastructure_schema, type="Infrastructure")
infrastructure \
    .set_version("1.0.0") \
    .set_compute("shared", {"resourceRequirements": "High", "availabilityZone": "us-west-2"}) \
    # ... other setter methods ...

# Create a Component instance using the previously defined SubComponents
pipeline = Component(specification=specification, implementation=implementation, infrastructure=infrastructure)

# Get the combined configuration of the component
pipeline.configure()
