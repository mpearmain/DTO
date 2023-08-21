from src.pipeline_sdk import Implementation, Infrastructure,  Pipeline, Specification, GeneralInformation, Contact, \
    Dependency, Contract, Attribute, AuditInformation, UsageDocumentation, PortServices


"""For this pipeline we utilise the predefined standards and structures, in a more complete version the 
infrastructure and implementation might well have more classes associated with them i.e QueryBuilder that are well 
utilised by the SDK"""

# Create Specification instance
specification_instance = (Specification()
    .set_type("MetaDataContract")
    .set_general_information(GeneralInformation(
        Name="SampleComponent",
        Version="1.0",
        Description="A sample component for demonstration",
        Tags=["example", "demo"],
        Owner="John Doe",
        Contact=Contact(Name="Jane Smith", Email="jane@example.com"),
        SLA="Standard",
        IncidenceResponseTime="24 hours",
        CodingStyleGuide="Company Standard",
        VCSLocation="https://github.com/example/sample",
        AccessRequestContact="access@example.com",
        ResiliencyAndRecovery="High",
        PerformanceMetrics="Standard Metrics",
        ScalabilityInformation="Scalable up to 1000 users",
        SecurityCompliance="Compliant with company policy"
    ))
    .add_dependency(Dependency(DependencyName="Database", DependencyType="internal", DependencyDetails="MySQL Database"))
    .add_interface(PortServices(Name="InputPort", Type="input", Services=["Service1", "Service2"]))
    .add_internal_resource("Resource1")
    .add_internal_resource("Resource2")
    .add_data_contract(Contract(
        Name="SampleContract",
        Description="A sample data contract",
        Attributes=[
            Attribute(
                Name="Attribute1",
                Type="int",
                Description="An integer attribute",
                Source="Source1",
                Privacy="Public",
                BusinessCriticality="High",
                Transformation={"Steps": [{"Description": "Step1", "Dependencies": [{"Name": "Dependency1", "Type": "internal", "Details": "Details1"}]}]}
            )
        ],
        DataGovernance={"DataSteward": "Steward1", "DataQuality": "High", "DataClassification": "Class1", "DataRetention": "5 years"},
        AccessControl={"AuthenticationService": "AuthService", "AuthorizationService": "AuthzService", "AccessPolicies": ["Policy1", "Policy2"]}
    ))
    .set_audit_information(AuditInformation(LastModified="2023-08-16T00:00:00Z", ModifiedBy="John Doe"))
    .add_usage_documentation(UsageDocumentation(DocName="UserGuide", DocLink="https://example.com/userguide"))
    .add_link("https://example.com/link1")
    .add_link("https://example.com/link2")
)

# Create Implementation instance
implementation_instance = (Implementation()
    .set_version("1.0.0")
    .set_engine("Spark")
    .set_resources(CPU=8, RAM="48Gi")
    .set_execution(JobType="batch", ScheduleExecution="00:00:00", Interval="6hrs")
    .set_query("SELECT foo, bar, baz FROM foobar f JOIN baz b ON f.id=b.id WHERE foo.blah > baz.")
)

# Create Infrastructure instance
infrastructure_instance = (Infrastructure()
    .set_version("1.0.0")
    .set_compute("shared", {"resourceRequirements": "High", "availabilityZone": "us-west-2"})
    .set_orchestration("workflow", {"workflowEngine": "Abstract Engine", "schedule": "Flexible"})
    .set_storage("cloud", {"storageClass": "Standard", "redundancy": "Multi-zone"})
    .set_persistence("cloud", {"storageType": "parquet", "cloudProvider": "AWS", "bucketName": "my-bucket", "region": "us-west-2", "accessKey": "$your-access-key", "secretKey": "$your-secret-key"})
    .set_identity("authentication", {"authService": "OAuth2", "authEndpoint": "https://auth.example.com"})
    .set_environment("production", {"deploymentZone": "us-west-2", "scalingPolicy": "auto", "environmentVariables": {"ENV": "production", "DEBUG": "false"}})
    .set_monitoring("endpoint", {"MetricsEndpoint": "http://example.com/metrics", "loggingLevel": "INFO", "alertingEmail": "alerts@example.com"})
)


# Create a Pipeline instance using the previously defined instances
pipeline_instance = Pipeline(
    implementation=implementation_instance,
    infrastructure=infrastructure_instance,
    specification=specification_instance
)

# Optionally, you can run the pipeline
pipeline_instance.execute()
