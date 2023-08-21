from pydantic import BaseModel
from src.component_sdk.component import SubComponent

class InfrastructureData(BaseModel):
    # Define the fields specific to the microservice infrastructure
    # ...

class Infrastructure(SubComponent):
    def __init__(self):
        super().__init__()
        self.metadata = InfrastructureData()

    # Define fluent interface methods for setting and adding properties
    # ...

    def validate(self, **kwargs) -> None:
        pass

    def load_schema(self, **kwargs) -> None:
        pass
