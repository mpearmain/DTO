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
    def __init__(self, infrastructure_metadata: InfrastructureData):
        super().__init__()
        self.metadata = infrastructure_metadata

    def validate(self, **kwargs) -> None:
        pass  # Validation is handled automatically by Pydantic

    def load_schema(self, **kwargs) -> None:
        pass  # Schema is defined using Python classes, so this method does nothing
