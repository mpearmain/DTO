from .specification import Specification
from .implementation import Implementation
from .infrastructure import Infrastructure


class Thirdparty:
    def __init__(self, specification: Specification,
                 implementation: Implementation = None,
                 infrastructure: Infrastructure = None):
        self.specification = specification
        self.implementation = implementation
        self.infrastructure = infrastructure
        self.configuration = None

    def execute(self):
        # Code to execute the Microservice
        pass
