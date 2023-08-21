from componentSDK import MetaDataContract as BaseMetaDataContract, Implementation as BaseImplementation, Infrastructure as BaseInfrastructure, Component


# Extend the MetaDataContract for Pipeline
class MetaDataContract(BaseMetaDataContract):
    def __init__(self, contract_metadata, schema_definition):
        super().__init__(contract_metadata, schema_definition)
        # Additional initialization code specific to the pipeline, if needed


# Extend the Implementation for Pipeline
class Implementation(BaseImplementation):
    def __init__(self, metadata_contract, implementation_metadata, schema_definition=None):
        super().__init__(metadata_contract, implementation_metadata, schema_definition)
        # Additional initialization code specific to the pipeline, if needed


# Extend the Infrastructure for Pipeline
class Infrastructure(BaseInfrastructure):
    def __init__(self, metadata_contract, infrastructure_metadata, schema_definition=None):
        super().__init__(metadata_contract, infrastructure_metadata, schema_definition)
        # Additional initialization code specific to the pipeline, if needed


class Pipeline(Component):
    def __init__(self, metadata_contract, implementation=None, infrastructure=None):
        super().__init__(metadata_contract, implementation, infrastructure)

