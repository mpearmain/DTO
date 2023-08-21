from pydantic import BaseModel, EmailStr, HttpUrl
from typing import List, Literal
from src.component_sdk.component import SubComponent


class Contact(BaseModel):
    Name: str
    Email: EmailStr


class GeneralInformation(BaseModel):
    Name: str
    Version: str
    Description: str
    Tags: List[str]
    Owner: str
    Contact: Contact
    SLA: str
    IncidenceResponseTime: str
    CodingStyleGuide: str
    VCSLocation: HttpUrl
    AccessRequestContact: str
    ResiliencyAndRecovery: str
    PerformanceMetrics: str
    ScalabilityInformation: str
    SecurityCompliance: str


class Dependency(BaseModel):
    DependencyName: str
    DependencyType: Literal["internal", "external"]
    DependencyDetails: str


class PortServices(BaseModel):
    Name: str
    Type: Literal["input", "output"]
    Services: List[str]


class Attribute(BaseModel):
    Name: str
    Type: Literal["int", "float", "string", "boolean", "date", "object"]
    Description: str
    Source: str
    Privacy: str
    BusinessCriticality: str
    Transformation: dict  # Define further as needed


class Contract(BaseModel):
    Name: str
    Description: str
    Attributes: List[Attribute]
    DataGovernance: dict  # Define further as needed
    AccessControl: dict  # Define further as needed


class AuditInformation(BaseModel):
    LastModified: str
    ModifiedBy: str


class UsageDocumentation(BaseModel):
    DocName: str
    DocLink: HttpUrl


class SpecificationData(BaseModel):
    Type: str
    GeneralInformation: GeneralInformation
    Dependencies: List[Dependency]
    Interfaces: List[PortServices]
    InternalResources: List[str]
    DataContract: List[Contract]
    AuditInformation: AuditInformation
    UsageDocumentation: List[UsageDocumentation]
    Links: List[HttpUrl]


class Specification(SubComponent):
    def __init__(self):
        super().__init__()
        self.metadata = SpecificationData()

    def set_type(self, type: str):
        self.metadata.Type = type
        return self

    def set_general_information(self, general_information: GeneralInformation):
        self.metadata.GeneralInformation = general_information
        return self

    def add_dependency(self, dependency: Dependency):
        self.metadata.Dependencies.append(dependency)
        return self

    def add_interface(self, interface: Interface):
        self.metadata.Interfaces.append(interface)
        return self

    def add_internal_resource(self, resource: str):
        self.metadata.InternalResources.append(resource)
        return self

    def add_data_contract(self, data_contract: DataContract):
        self.metadata.DataContract.append(data_contract)
        return self

    def set_audit_information(self, audit_information: AuditInformation):
        self.metadata.AuditInformation = audit_information
        return self

    def add_usage_documentation(self, usage_documentation: UsageDocumentation):
        self.metadata.UsageDocumentation.append(usage_documentation)
        return self

    def add_link(self, link: str):
        self.metadata.Links.append(link)
        return self

    def validate(self, **kwargs) -> None:
        pass  # Validation is handled automatically by Pydantic

    def load_schema(self, **kwargs) -> None:
        pass  # Schema is defined using Python classes, so this method does nothing
