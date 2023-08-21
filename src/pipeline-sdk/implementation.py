from pydantic import BaseModel
from typing import Literal
from src.component_sdk.component import SubComponent


class Resources(BaseModel):
    CPU: int
    RAM: str
    GPU: str = "None"


class Execution(BaseModel):
    JobType: Literal["batch", "streaming"]
    ScheduleExecution: str
    Interval: str


class ImplementationData(BaseModel):
    Version: str
    Engine: Literal["Spark", "Flink", "pandas", "polars", "duckdb", "custom"]
    Resources: Resources
    Execution: Execution
    Query: str


class Implementation(SubComponent):
    def __init__(self, implementation_metadata: ImplementationData):
        super().__init__()
        self.metadata = implementation_metadata

    def validate(self, **kwargs) -> None:
        pass  # Validation is handled automatically by Pydantic

    def load_schema(self, **kwargs) -> None:
        pass  # Schema is defined using Python classes, so this method does nothing
