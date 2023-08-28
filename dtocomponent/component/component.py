"""
This module provides classes for defining and manipulating components in a digital twin system.
It consists of two main classes: SubComponent and Component.

- SubComponent: An abstract base class that represents a part of a component, such as a specification,
  implementation, or infrastructure. It provides methods for loading and manipulating instances
  based on a given JSON schema.

- Component: A class that represents a complete component, consisting of one or more SubComponents.
  It provides methods for configuring and validating the component based on its constituent parts.

Example usage:

    specification_schema = {...}  # JSON schema for the specification
    implementation_schema = {...}  # JSON schema for the implementation

    specification = SubComponent(specification_schema)
    implementation = SubComponent(implementation_schema)

    specification.load_instance({...})  # JSON data for the specification
    implementation.load_instance({...})  # JSON data for the implementation

    component = Component(specification, implementation)
    configuration = component.configure()
"""

import logging
import warlock
from abc import ABC
from typing import Any, Dict, Optional

# Configure logging
logger = logging.getLogger(__name__)


class SubComponent(ABC):
    """
    Abstract base class for a subcomponent, such as a specification, implementation, or infrastructure.

    :param schema: The JSON schema defining the structure of the subcomponent.
    """

    def __init__(self, schema: Dict[str, Any]):
        ALLOWED_SCHEMA_TYPES = ["Specification", "Implementation", "Infrastructure"]

        # Extracting the SchemaType based on the updated schema structure
        self.schema_type = \
        schema.get("properties", {}).get("SubComponent", {}).get("properties", {}).get("SchemaType", {}).get("enum",
                                                                                                             [])[0]

        if self.schema_type not in ALLOWED_SCHEMA_TYPES:
            raise ValueError(f"SchemaType must be set to an allowed type {', '.join(ALLOWED_SCHEMA_TYPES)}.")

        self.model_factory = warlock.model_factory(schema)
        self.instance = None

    def load_instance(self, json_data: Dict[str, Any]) -> None:
        """
        Load an instance from JSON data and validate it against the schema.

        :param json_data: A dictionary representing the JSON data.
        """
        self.instance = self.model_factory(json_data)

    def get_attribute(self, attr_name: str) -> Any:
        """
        Get an attribute from the loaded instance.

        :param attr_name: The name of the attribute to retrieve.
        :return: The value of the attribute.
        """
        if self.instance is None:
            raise RuntimeError("Instance has not been loaded. Call load_instance() first.")
        return self.instance["SubComponent"].get(attr_name)

    def set_attribute(self, attr_name: str, value: Any) -> None:
        """
        Set an attribute in the loaded instance.

        :param attr_name: The name of the attribute to set.
        :param value: The value to set.
        """
        if self.instance is None:
            raise RuntimeError("Instance has not been loaded. Call load_instance() first.")
        setattr(self.instance, attr_name, value)


class Component:
    """
    Represents a complete component in a digital twin system, consisting of specification, implementation, and infrastructure.

    Attributes:
        name (str): The name of the component.
        specification (SubComponent): A SubComponent object representing the specification contract.
        implementation (Optional[SubComponent]): A SubComponent object representing the implementation. Optional.
        infrastructure (Optional[SubComponent]): A SubComponent object representing the infrastructure. Optional.
        configuration (Optional[Dict[str, Any]]): The combined configuration of the component.

    Methods:
        configure: Generates a combined configuration of the component based on its subcomponents.

    Example:
        pipeline = Component(name='data_pipeline', specification=specification, implementation=implementation,
                             infrastructure=infrastructure)
        configuration = pipeline.configure()
        print(configuration)
    """

    def __init__(self, name: str, specification: SubComponent, implementation: Optional[SubComponent] = None,
                 infrastructure: Optional[SubComponent] = None):
        self.name = name
        self.specification = self._validate_subcomponent(specification)
        self.implementation = self._validate_subcomponent(implementation)
        self.infrastructure = self._validate_subcomponent(infrastructure)
        self.configuration: Optional[Dict[str, Any]] = None
        logger.info("Component initialised successfully.")

    @staticmethod
    def _validate_subcomponent(subcomponent: Optional[SubComponent]) -> Optional[SubComponent]:
        """
        Validate a subcomponent.

        :param subcomponent: The subcomponent to validate.
        :return: The validated subcomponent, or None if it was None.
        :raises ValueError: If the subcomponent is not an instance of SubComponent class.
        """
        if subcomponent is None:
            return None
        if not isinstance(subcomponent, SubComponent):
            raise ValueError(f"Subcomponent must be an instance of SubComponent class or None.")
        return subcomponent

    def configure(self) -> Dict[str, Any]:
        """
        Generates a combined configuration of the component based on its subcomponents.

        The method processes each subcomponent (specification, implementation, infrastructure) and retrieves its
        SchemaType attribute to determine its type. The SchemaType attribute is then used as a key in the final
        configuration dictionary, and the subcomponent data is added as its value. The SchemaType attribute itself
        is removed from the subcomponent data to prevent redundancy.

        The final configuration has the following structure:
        {
            'ComponentName': {
                'Specification': { ... },
                'Implementation': { ... },
                'Infrastructure': { ... }
            }
        }

        Returns:
            Dict[str, Any]: A dictionary containing the combined configuration of the component.

        Raises:
            Exception: If there's an error generating the configuration.
        """
        self.configuration = {}
        try:
            # Assign the metadata to the configuration
            for subcomponent_attr in ['specification', 'implementation', 'infrastructure']:
                subcomponent = getattr(self, subcomponent_attr, None)
                if subcomponent and subcomponent.instance:
                    schema_type = subcomponent.get_attribute("SchemaType")
                    subcomponent_data = subcomponent.instance["SubComponent"]
                    # Remove the SchemaType attribute
                    subcomponent_data.pop("SchemaType", None)
                    self.configuration.setdefault(self.name, {})[schema_type] = subcomponent_data

            logger.info("Configuration generated successfully.")
            return self.configuration
        except Exception as err:
            logger.error(f"Error generating configuration: {str(err)}")
            raise
