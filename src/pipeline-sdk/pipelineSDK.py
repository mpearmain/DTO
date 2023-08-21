from componentSDK import Component, SubComponent


# Extend the specification for Pipeline
class Specification(SubComponent):
    def __init__(self):
        super().__init__()
        self.metadata = SCHEMA()
    def validate(self, **kwargs) -> None:
        pass

    def load_schema(self, **kwargs) -> None:
        pass


# Extend the Implementation for Pipeline
class Implementation(SubComponent):
    def __init__(self):
        super().__init__()

    def validate(self, **kwargs) -> None:
        pass

    def load_schema(self, **kwargs) -> None:
        pass


# Extend the Infrastructure for Pipeline
class Infrastructure(SubComponent):
    def __init__(self):
        super().__init__()

    def validate(self, **kwargs) -> None:
        pass

    def load_schema(self, **kwargs) -> None:
        pass


class Pipeline(Component):
    def __init__(self, metadata_contract, implementation=None, infrastructure=None):
        super().__init__(metadata_contract, implementation, infrastructure)


SCHEMA = {}