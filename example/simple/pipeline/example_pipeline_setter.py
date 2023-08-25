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
from src.component import Component, SubComponent
import json


def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path) as file:
        return json.load(file)


# Loading the JSON schemas for each subcomponent
specification_schema = load_json('./schemas/specification_schema.json')
implementation_schema = load_json('./schemas/implementation_schema.json')
infrastructure_schema = load_json('./schemas/infrastructure_schema.json')

# Create an instance of SubComponent for Specification
specification = SubComponent(schema=specification_schema)
specification.set_attribute("Type", "Specification")
specification.set_attribute("GeneralInformation", {
    "Name": "SampleComponent",
    "Version": "1.0",
    "Description": "A sample component for demonstration",
    # ... other attributes ...
})
specification.set_attribute("Dependencies", [
    {"DependencyName": "Database", "DependencyType": "internal", "DependencyDetails": "MySQL Database"}
])
# ... other attributes ...

# Create an instance of SubComponent for Implementation
implementation = SubComponent(schema=implementation_schema)
implementation.set_attribute("Type", "Implementation")
implementation.set_attribute("Version", "1.0.0")
implementation.set_attribute("Engine", "Spark")
implementation.set_attribute("Resources", {"CPU": 8, "RAM": "48Gi", "GPU": "None"})
implementation.set_attribute("Execution", {"JobType": "batch",
                                           "ScheduleExecution": "00:00:00",
                                           "Interval": "6hrs"})
implementation.set_attribute("Query",
                             "SELECT foo, bar, baz FROM foobar f JOIN baz b ON f.id=b.id WHERE foo.blah > baz.")

# Create an instance of SubComponent for Infrastructure
infrastructure = SubComponent(schema=infrastructure_schema)
infrastructure.set_attribute("Type", "Infrastructure")
infrastructure.set_attribute("Version", "1.0.0")
infrastructure.set_attribute("Compute", {"Type": "shared",
                                         "Configuration": {"resourceRequirements": "High",
                                                           "availabilityZone": "us-west-2"
                                                           }
                                         })
infrastructure.set_attribute("Orchestration", {"Type": "Kubernetes",
                                               "Configuration": {"clusterSize": 5,
                                                                 "namespace": "production"
                                                                 }
                                               })
# ... other attributes ...


# Create a Component instance using the previously defined SubComponents
pipeline = Component(specification=specification, implementation=implementation, infrastructure=infrastructure)

# Get the combined configuration of the component
configuration = pipeline.configure()
print(configuration)  # Print or use the combined configuration as needed
