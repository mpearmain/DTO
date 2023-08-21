from pydantic import BaseModel
from src.component_sdk.component import SubComponent
from typing import Dict


class ComponentConfiguration(BaseModel):
    Type: str
    Configuration: Dict[str, object]


class InfrastructureData(BaseModel):
    Version: str
    Compute: ComponentConfiguration
    Orchestration: ComponentConfiguration
    Storage: ComponentConfiguration
    Persistence: ComponentConfiguration
    Identity: ComponentConfiguration
    Environment: ComponentConfiguration
    Monitoring: ComponentConfiguration


class Infrastructure(SubComponent):
    def __init__(self):
        super().__init__()
        self.metadata = InfrastructureData()

    def set_version(self, version: str):
        self.metadata.Version = version
        return self

    def set_compute(self, type: str, configuration: Dict[str, object]):
        self.metadata.Compute = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_orchestration(self, type: str, configuration: Dict[str, object]):
        self.metadata.Orchestration = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_storage(self, type: str, configuration: Dict[str, object]):
        self.metadata.Storage = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_persistence(self, type: str, configuration: Dict[str, object]):
        self.metadata.Persistence = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_identity(self, type: str, configuration: Dict[str, object]):
        self.metadata.Identity = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_environment(self, type: str, configuration: Dict[str, object]):
        self.metadata.Environment = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def set_monitoring(self, type: str, configuration: Dict[str, object]):
        self.metadata.Monitoring = ComponentConfiguration(Type=type, Configuration=configuration)
        return self

    def validate(self, **kwargs) -> None:
        pass  # Validation is handled automatically by Pydantic

    def load_schema(self, **kwargs) -> None:
        pass  # Schema is defined using Python classes, so this method does nothing
