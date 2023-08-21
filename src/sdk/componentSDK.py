from abc import ABC, abstractmethod


class SubComponent(ABC):
    """
    Abstract base class for handling subcomponents.
    This class can be extended to handle specific logic for different types of components.
    """

    def __init__(self):
        self.metadata = None  # Initialize as None; will be assigned after validation

    def add_attr(self, key, value):
        """
        Adds an attribute to the concrete class.

        :param key: Attribute name.
        :param value: Attribute value.
        :return: self
        """
        setattr(self, key, value)
        return self

    def remove_attr(self, key):
        """
        Removes an attribute from the concrete class.

        :param key: Attribute name to be removed.
        :return: self
        """
        if hasattr(self, key):
            delattr(self, key)
        return self

    @abstractmethod
    def load_schema(self, **kwargs):
        """Load the schema for this component. Must be implemented by subclasses."""
        pass

    @abstractmethod
    def validate(self, **kwargs):
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

    def __init__(self, specification, implementation=None, infrastructure=None):
        if not isinstance(specification, SubComponent):
            raise ValueError("specification must be an instance of SubComponent class.")
        if implementation is not None and not isinstance(implementation, SubComponent):
            raise ValueError("implementation must be an instance of SubComponent class or None.")
        if infrastructure is not None and not isinstance(infrastructure, SubComponent):
            raise ValueError("infrastructure must be an instance of SubComponent class or None.")

        self.specification = specification
        self.implementation = implementation
        self.infrastructure = infrastructure
        self.configuration = None

    def configuration(self):
        """
        Bind all the components on its constituent parts to have the total configuration of the component.
        Only the metadata contract is required. Implementation and infrastructure are optional.

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
