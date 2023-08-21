from pydantic import BaseModel
from src.component_sdk.component import SubComponent

class SpecificationData(BaseModel):
    # Define the fields specific to the microservice specification
    # ...

class Specification(SubComponent):
    def __init__(self):
        super().__init__()
        self.metadata = SpecificationData()

    # Define fluent interface methods for setting and adding properties
    # ...

    def validate(self, **kwargs) -> None:
        pass

    def load_schema(self, **kwargs) -> None:
        pass
