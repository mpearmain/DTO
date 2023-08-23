import logging
from jsonschema import validate
from abc import ABC
from typing import Any, Dict, Optional

# Configure logging
logger = logging.getLogger(__name__)

"""
This module defines two core classes, SubComponent and Component, that serve as the foundation classes for building
complex components in a digital twin system. 
SubComponent is an abstract base class that can be extended to handle specific logic for different types of components,
such as specification, implementation, and infrastructure. 
Component represents a complete DTOComponent, consisting of one or more SubComponents.
"""


class SubComponent(ABC):
    """
    Abstract base class for handling subcomponents.
    This class can be extended to handle specific logic for different types of components.
    """
    ALLOWED_TYPES = ["Specification", "Implementation", "Infrastructure"]

    def __init__(self, schema, type):
        self.schema = None
        if type not in self.ALLOWED_TYPES:
            raise ValueError(f"Invalid type: {type}. Must be one of {self.ALLOWED_TYPES}.")
        self.type = type
        self.metadata: Optional[Dict[str, Any]] = None  # Initialize as None; will be assigned after validation
        self._load_schema(schema=schema)

    @classmethod
    def _create_methods_from_schema(cls, schema: dict) -> None:
        """
        Dynamically creates setter methods for the class based on the provided JSON schema.

        This method iterates through the properties defined in the schema and creates a setter method for each property.
        The setter method will be named "set_<property_name>" and will call the add_attr method to add the attribute to
        the metadata.

        :param schema: A dictionary representing the JSON schema.
        """

        # Extract the properties from the schema. The schema is expected to have a specific structure where the
        # properties are nested inside an object, so we access the first value of the "properties" dictionary.
        properties = list(schema["properties"].values())[0]["properties"]

        # Iterate through the properties, creating a setter method for each one.
        for name, details in properties.items():
            # Define the setter method. It takes two parameters: self and value.
            # The name parameter is captured from the outer scope and used to call add_attr with the correct key.
            def setter(self, value, name=name):
                return self.add_attr(name, value)  # Call add_attr internally to add the attribute to the metadata

            # Create the method name by converting the property name to lowercase and prefixing it with "set_".
            method_name = f"set_{name.lower()}"

            # Use setattr to add the setter method to the class. This makes the method available on all instances of the
            # class.
            setattr(cls, method_name, setter)

    def add_attr(self, key: str, value: Any) -> 'SubComponent':
        """
        Adds an attribute to the metadata and creates a corresponding setter method if it doesn't exist.

        :param key: Attribute name.
        :param value: Attribute value.
        :return: self
        """
        if self.metadata is None:
            self.metadata = {}
        self.metadata[key] = value
        self.validate(self.metadata)  # Revalidate the metadata

        # Check if a setter method already exists for this attribute
        method_name = f"set_{key.lower()}"
        if not hasattr(self, method_name):
            # If not, create the setter method
            def setter(self, value, key=key):
                return self.add_attr(key, value)  # Call add_attr internally

            setattr(self.__class__, method_name, setter)

        return self

    def remove_attr(self, key: str) -> 'SubComponent':
        """
        Removes an attribute from the metadata and deletes the corresponding setter method if it exists.

        :param key: Attribute name to be removed.
        :return: self
        """
        if self.metadata and key in self.metadata:
            del self.metadata[key]
            self.validate(self.metadata)  # Revalidate the metadata

            # Check if a setter method exists for this attribute
            method_name = f"set_{key.lower()}"
            if hasattr(self, method_name):
                # If so, delete the setter method
                delattr(self.__class__, method_name)

        return self

    def _load_schema(self, schema: dict) -> None:
        """
        Load the schema for this DTOComponent.

        :param schema: A dictionary representing the JSON schema.
        :raises ValueError: If the schema is not a valid dictionary.
    """
        if not isinstance(schema, dict):
            raise ValueError("Schema must be a dictionary.")
        self.schema = schema
        self._create_methods_from_schema(schema)  # Automatically create methods from the schema

    def validate(self, instance: dict) -> None:
        """
        Validate the metadata against the loaded schema.

        :param instance: A dictionary representing the metadata to be validated.
        :raises jsonschema.exceptions.ValidationError: If the instance does not conform to the schema.
        :raises RuntimeError: If the schema has not been loaded.
        """
        if self.schema is None:
            raise RuntimeError("Schema has not been loaded. Call load_schema() first with a JSON schema.")
        validate(instance, self.schema)


class Component:
    """
    Represents a complete DTOComponent, consisting of specification, implementation, and infrastructure.

    :param specification: SubComponent object representing the specification contract.
    :param implementation: SubComponent object representing the implementation (optional).
    :param infrastructure: SubComponent object representing the infrastructure (optional).
    """

    def __init__(self, specification: SubComponent, implementation: Optional[SubComponent] = None,
                 infrastructure: Optional[SubComponent] = None):
        try:
            self.specification = self._validate_subcomponent(specification)
            self.implementation = self._validate_subcomponent(implementation)
            self.infrastructure = self._validate_subcomponent(infrastructure)
            self.configuration: Optional[Dict[str, Any]] = None

            logger.info("Component initialized successfully.")
        except ValueError as e:
            logger.error(f"Error initializing Component: {str(e)}")
            raise

    @staticmethod
    def _validate_subcomponent(subcomponent: Optional[SubComponent]) -> Optional[SubComponent]:
        """
        Validate a subcomponent against its schema.

        :param subcomponent: The subcomponent to validate.
        :param name: The name of the subcomponent (for error messages).
        :return: The validated subcomponent, or None if it was None.
        :raises ValueError: If the subcomponent is not an instance of SubComponent class.
        :raises jsonschema.exceptions.ValidationError: If the subcomponent does not conform to its schema.
        """
        if subcomponent is None:
            return None
        if not isinstance(subcomponent, SubComponent):
            raise ValueError(f"Subcomponent must be an instance of SubComponent class or None.")
        if subcomponent.type not in SubComponent.ALLOWED_TYPES:
            raise ValueError(f"Invalid type: {subcomponent.type}. Must be one of {SubComponent.ALLOWED_TYPES}.")
        subcomponent.validate(subcomponent.metadata)  # Validate the metadata against the schema
        return subcomponent

    def configure(self) -> Dict[str, Any]:
        """
        Bind all the components on its constituent parts to have the total configuration of the DTOComponent.
        Only the specification contract is required, implementation and infrastructure are optional.

        :return: A dictionary containing the combined configuration of the DTOComponent.
        """
        try:
            # Assign the metadata to the configuration
            self.configuration = {'specification': self.specification.metadata}

            # Assign implementation and infrastructure if they exist
            for attr_name in ['implementation', 'infrastructure']:
                attr = getattr(self, attr_name, None)
                if attr:
                    self.configuration[attr_name] = attr.metadata

            logger.info("Configuration generated successfully.")
            return self.configuration
        except Exception as err:
            logger.error(f"Error generating configuration: {str(err)}")
            raise
