from src.component import Component, SubComponent

# Assuming you have the JSON schemas for each subcomponent
specification_schema = {...}  # JSON schema for Specification
implementation_schema = {...}  # JSON schema for Implementation
infrastructure_schema = {...}  # JSON schema for Infrastructure

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
    .set_execution({
        "JobType": "batch",
        "ScheduleExecution": "00:00:00",
        "Interval": "6hrs"
    }) \
    .set_query("SELECT foo, bar, baz FROM foobar f JOIN baz b ON f.id=b.id WHERE foo.blah > baz.")

# Create an instance of SubComponent for Infrastructure, passing the schema to the constructor
infrastructure = SubComponent(schema=infrastructure_schema, type="Infrastructure")
infrastructure \
    .set_version("1.0.0") \
    .set_compute("shared", {"resourceRequirements": "High", "availabilityZone": "us-west-2"}) \
    # ... other setter methods ...

# Create a Component instance using the previously defined SubComponents
pipeline = Component(specification=specification,implementation=implementation,infrastructure=infrastructure)

# Get the combined configuration of the component
pipeline.configure()

