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
    def __init__(self):
        super().__init__()
        self.metadata = ImplementationData()

    def set_version(self, version: str):
        self.metadata.Version = version
        return self

    def set_engine(self, engine: str):
        self.metadata.Engine = engine
        return self

    def set_resources(self, cpu: int, ram: str, gpu: str = "None"):
        self.metadata.Resources = Resources(CPU=cpu, RAM=ram, GPU=gpu)
        return self

    def set_execution(self, job_type: str, schedule_execution: str, interval: str):
        self.metadata.Execution = Execution(JobType=job_type, ScheduleExecution=schedule_execution, Interval=interval)
        return self

    def set_query(self, query: str):
        self.metadata.Query = query
        return self

    def validate(self, **kwargs) -> None:
        pass  # Validation is handled automatically by Pydantic

    def load_schema(self, **kwargs) -> None:
        pass  # Schema is defined using Python classes, so this method does nothing
