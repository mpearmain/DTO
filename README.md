# The Digital Twin for an Organisation

This repository contains code for generating configuration objects to create digital twins via a component structure. It includes a core Component, which serves as the foundational building block for defining and validating components within the digital twin framework.
The Component provides abstract classes for defining and validating components, such as specification, implementation, and infrastructure. These components are validated against JSON schemas, ensuring that they adhere to the specified structure and constraints.

### Featured Classes:

- **SubComponent**: An abstract base class for handling subcomponents. It can be extended to handle specific logic for different types of components, such as specification, implementation, and infrastructure. It includes methods for dynamically creating setter methods based on a JSON schema, adding and removing attributes, and validating metadata against the schema.

- **Component**: Represents a complete component, consisting of one or more SubComponents. It includes methods for validating subcomponents and generating a combined configuration.

### JSON Schemas

The JSON schemas define the structure and validation rules for each subcomponent. They are used to dynamically create setter methods and validate the metadata of the subcomponents. Example schemas are provided in the `example/simple/pipeline/schemas` directory.

## Example Usage

The `example` directory contains examples of how to define and configure components using the Component. This includes examples for both setter-based configuration (`example_pipeline_setter.py`) and JSON-based configuration (`pipeline_example_JSON.py`).

## Getting Started

Refer to the example code and individual class documentation for detailed instructions on defining and configuring components using the Component.

## Tests

The `tests` directory contains test cases for the Component and SubComponent classes. Run the tests to verify the functionality of the core classes.

## Contributing

Contributions are welcome! Please refer to the CONTRIBUTING.md file for guidelines on contributing to this project.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.
