from abc import ABC, abstractmethod
from typing import Any, Dict, Optional

"""
This module defines two core classes, SubComponent and Component, that serve as the foundation classes for building
complex components in a digital twin system. 
SubComponent is an abstract base class that can be extended to handle specific logic for different types of components,
such as specification, implementation, and infrastructure. 
Component represents a complete component, consisting of one or more SubComponents.
"""


class SubComponent(ABC):
    """
    Abstract base class for handling subcomponents.
    This class can be extended to handle specific logic for different types of components.
    """

    def __init__(self):
        self.metadata: Optional[Dict[str, Any]] = None  # Initialize as None; will be assigned after validation

    def add_attr(self, key: str, value: Any) -> 'SubComponent':
        """
        Adds an attribute to the concrete class.

        :param key: Attribute name.
        :param value: Attribute value.
        :return: self
        """
        setattr(self, key, value)
        return self

    def remove_attr(self, key: str) -> 'SubComponent':
        """
        Removes an attribute from the concrete class.

        :param key: Attribute name to be removed.
        :return: self
        """
        if hasattr(self, key):
            delattr(self, key)
        return self

    @abstractmethod
    def load_schema(self, **kwargs) -> None:
        """Load the schema for this component. Must be implemented by subclasses."""
        pass

    @abstractmethod
    def validate(self, **kwargs) -> None:
        """
        Abstract method to validate the metadata.
        Subclasses must implement this method.
        """
        pass


class Component:
    """
    Represents a complete component, consisting of metadata, implementation, and infrastructure.

    :param specification: SubComponent object representing the metadata contract.
    :param implementation: SubComponent object representing the implementation (optional).
    :param infrastructure: SubComponent object representing the infrastructure (optional).
    """

    def __init__(self, specification: SubComponent, implementation: Optional[SubComponent] = None,
                 infrastructure: Optional[SubComponent] = None):
        if not isinstance(specification, SubComponent):
            raise ValueError("specification must be an instance of SubComponent class.")
        if implementation is not None and not isinstance(implementation, SubComponent):
            raise ValueError("implementation must be an instance of SubComponent class or None.")
        if infrastructure is not None and not isinstance(infrastructure, SubComponent):
            raise ValueError("infrastructure must be an instance of SubComponent class or None.")

        self.specification = specification
        self.implementation = implementation
        self.infrastructure = infrastructure
        self.configuration: Optional[Dict[str, Any]] = None

    def configuration(self) -> Dict[str, Any]:
        """
        Bind all the components on its constituent parts to have the total configuration of the component.
        Only the specification contract is required, implementation and infrastructure are optional.

        :return: A dictionary containing the combined configuration of the component.
        """
        # Assign the metadata to the configuration
        self.configuration = {'metadata': self.specification.metadata}

        # Assign implementation and infrastructure if they exist
        for attr_name in ['implementation', 'infrastructure']:
            attr = getattr(self, attr_name, None)
            if attr:
                self.configuration[attr_name] = attr.metadata

        return self.configuration
