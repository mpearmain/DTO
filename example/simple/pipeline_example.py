from pipeline_sdk import Implementation, ImplementationData
from pipeline_sdk import Infrastructure, InfrastructureData
from pipeline_sdk import Specification, SpecificationData
from pipeline_sdk import Pipeline

"""For this pipeline we utilise the predefined standards and structures, in a more complete version the 
infrastructure and implementation might well have more classes associated with them i.e QueryBuilder that are well 
utilised by the SDK"""

# Create Implementation instance
implementation_instance = Implementation(
    implementation_metadata=ImplementationData(
        Version="1.0.0",
        Engine="Spark",
        Resources=Resources(CPU=8, RAM="48Gi"),
        Execution=Execution(JobType="batch", ScheduleExecution="00:00:00", Interval="6hrs"),
        Query="""SELECT foo, bar, baz FROM foobar f JOIN baz b ON f.id=b.id WHERE foo.blah > baz."""
    )
)

# Create Infrastructure instance
infrastructure_instance = Infrastructure(
    infrastructure_metadata=InfrastructureData(
        Version="1.0.0",
        Compute=Configuration(Type="shared", Configuration={"resourceRequirements": "High", "availabilityZone": "us-west-2"}),
        Orchestration=Configuration(Type="workflow", Configuration={"workflowEngine": "Abstract Engine", "schedule": "Flexible"}),
        Storage=Configuration(Type="cloud", Configuration={"storageClass": "Standard", "redundancy": "Multi-zone"}),
        Persistence=Configuration(Type="cloud", Configuration={"storageType": "parquet", "cloudProvider": "AWS", "bucketName": "my-bucket", "region": "us-west-2", "accessKey": "$your-access-key", "secretKey": "$your-secret-key"}),
        Identity=Configuration(Type="authentication", Configuration={"authService": "OAuth2", "authEndpoint": "https://auth.example.com"}),
        Environment=Configuration(Type="production", Configuration={"deploymentZone": "us-west-2", "scalingPolicy": "auto", "environmentVariables": {"ENV": "production", "DEBUG": "false"}}),
        Monitoring=Configuration(Type="endpoint", Configuration={"MetricsEndpoint": "http://example.com/metrics", "loggingLevel": "INFO", "alertingEmail": "alerts@example.com"})
    )
)

# Create Specification instance
specification_instance = Specification(
    specification_metadata=SpecificationData(
        Type="MetaDataContract",
        GeneralInformation=GeneralInformation(
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
        ),
        Dependencies=[Dependency(DependencyName="Database", DependencyType="internal", DependencyDetails="MySQL Database")],
        Interfaces=[Interface(Port=Port(Name="InputPort", Type="input", Services=["Service1", "Service2"]))],
        InternalResources=["Resource1", "Resource2"],
        DataContract=[
            DataContract(
                Contract=Contract(
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
                            Transformation=Transformation(Steps=[Step(Description="Step1", Dependencies=[Dependency(Name="Dependency1", Type="internal", Details="Details1")])])
                        )
                    ],
                    DataGovernance=DataGovernance(DataSteward="Steward1", DataQuality="High", DataClassification="Class1", DataRetention="5 years"),
                    AccessControl=AccessControl(AuthenticationService="AuthService", AuthorizationService="AuthzService", AccessPolicies=["Policy1", "Policy2"])
                )
            )
        ],
        AuditInformation=AuditInformation(LastModified="2023-08-16T00:00:00Z", ModifiedBy="John Doe"),
        UsageDocumentation=[UsageDocumentation(DocName="UserGuide", DocLink="https://example.com/userguide")],
        Links=["https://example.com/link1", "https://example.com/link2"]
    )
)

# Create a Pipeline instance using the previously defined instances
pipeline_instance = Pipeline(
    implementation=implementation_instance,
    infrastructure=infrastructure_instance,
    specification=specification_instance
)

# Optionally, you can run the pipeline
pipeline_instance.run()