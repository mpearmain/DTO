from abc import ABC, abstractmethod
from jsonschema import validate, ValidationError


class Builder(ABC):
    """
    Abstract base class for building different parts of a component.

    :param metadata: The metadata to be used in the building process (None until validated).
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
    def _validate(self, metadata):
        """
        Abstract method to validate the metadata.
        Subclasses must implement this method.

        :param metadata: The metadata to be validated.
        """
        pass


class MetaDataContract(Builder):
    """
    Base class for handling metadata contracts.
    This class can be extended to handle specific logic for different types of components.

    By default we internally call teh _validate function when the class is instatiated to make sure the data matches a
    json schema

    :param contract_metadata: The contract metadata for a component.
    :param schema_definition: JSON schema definition to check and enforce the metadata contract information is valid.
    """

    def __init__(self, contract_metadata, schema_definition):
        super().__init__()  # Call the superclass constructor
        if schema_definition is None:
            raise ValueError("Schema definition must be provided.")
        self.schema = schema_definition
        if self._validate(contract_metadata):  # Validate the metadata
            self.metadata = contract_metadata  # Assign the metadata after validation

    def _validate(self, metadata):
        """
        Validate the metadata against the provided JSON schema.

        :param metadata: The metadata to be validated.
        :return: True if validation is successful, False otherwise.
        """
        try:
            validate(metadata, self.schema)
            self.metadata = metadata  # Assign the metadata after successful validation
            return True
        except ValidationError as e:
            print(f"Validation error: {e.message}")
            # Handle the error as needed, e.g., raise a custom exception, log the error, etc.
            return False


class Implementation(Builder):
    """
    Specific methods and attributes for Implementation.
    This class can be extended to handle implementation-specific logic.

    :param metadata_contract: MetaDataContract object.
    :param implementation_metadata: Implementation-specific config metadata.
    :param schema_definition: JSON schema definition to check and enforce the metadata contract information is valid.
    """

    def __init__(self, metadata_contract, implementation_metadata, schema_definition):
        if not isinstance(metadata_contract, MetaDataContract):
            raise ValueError("metadata_contract must be an instance of MetaDataContract.")
        super().__init__()
        self.metadata_contract = metadata_contract
        if schema_definition is None:
            raise ValueError("Schema definition must be provided.")
        self.schema = schema_definition
        if self._validate(implementation_metadata):  # Validate the metadata
            self.metadata = implementation_metadata  # Assign the metadata after validation

    def _validate(self, metadata):
        try:
            validate(metadata, self.schema)
            return True
        except ValidationError as e:
            print(f"Validation error: {e.message}")
            return False


class Infrastructure(Builder):
    """
    Specific methods and attributes for Infrastructure.
    This class can be extended to handle infrastructure-specific logic.

    :param metadata_contract: MetaDataContract object.
    :param infrastructure_metadata: Infrastructure-specific config metadata.
    :param schema_definition: JSON schema definition to check and enforce the metadata contract information is valid.
    """

    def __init__(self, metadata_contract, infrastructure_metadata, schema_definition):
        if not isinstance(metadata_contract, MetaDataContract):
            raise ValueError("metadata_contract must be an instance of MetaDataContract.")
        super().__init__()
        self.metadata_contract = metadata_contract
        if schema_definition is None:
            raise ValueError("Schema definition must be provided.")
        self.schema = schema_definition
        if self._validate(infrastructure_metadata):  # Validate the metadata
            self.metadata = infrastructure_metadata  # Assign the metadata after validation

    def _validate(self, metadata):
        try:
            validate(metadata, self.schema)
            return True
        except ValidationError as e:
            print(f"Validation error: {e.message}")
            return False


class Component:
    """
    Represents a complete component, consisting of metadata, implementation, and infrastructure.

    :param metadata_contract: MetaDataContract object.
    :param implementation: Implementation object.
    :param infrastructure: Infrastructure object.
    """

    def __init__(self, metadata_contract, implementation=None, infrastructure=None):
        if not isinstance(metadata_contract, MetaDataContract):
            raise ValueError("metadata_contract must be an instance of MetaDataContract Class.")
        if implementation is not None and not isinstance(implementation, Implementation):
            raise ValueError("implementation must be an instance of Implementation Class or None.")
        if infrastructure is not None and not isinstance(infrastructure, Infrastructure):
            raise ValueError("infrastructure must be an instance of Infrastructure Class or None.")

        self.metadata_contract = metadata_contract
        self.implementation = implementation
        self.infrastructure = infrastructure
        self.configuration = None

    def configuration(self):
        """
        Bind all the components on its constituent parts to have the total configuration of the component
        Only the metadata contract is required. Implementation and infrastructure are optional.
        """
        # Assign the metadata to the configuration
        self.configuration = {'metadata': self.metadata_contract.metadata}

        # Assign implementation and infrastructure if they exist
        for attr_name in ['implementation', 'infrastructure']:
            attr = getattr(self, attr_name, None)
            if attr:
                self.configuration[attr_name] = attr.metadata
