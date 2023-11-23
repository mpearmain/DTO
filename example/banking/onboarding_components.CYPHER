// Create nodes for User Journey Components
CREATE (apiGateway:UserJourney {name: "API Gateway", type: "Microservice", technology: "AWS Lambda"}),
       (webAppUI:UserJourney {name: "Web App (UI)", type: "User Interface"}),
       (prospectsMS:UserJourney {name: "Prospects MS", type: "Microservice", technology: "AWS Lambda"}),
       (prospectsDB:UserJourney {name: "Prospects Database", type: "Data Storage", technology: "Amazon RDS"}),
       (coreBanking:UserJourney {name: "Core Banking", type: "3rd Party"}),
       (amlService:UserJourney {name: "AML", type: "3rd Party"}),
       (signatureCapture:UserJourney {name: "Signature Capture", type: "Microservice", technology: "AWS Lambda"}),
       (tAndC:UserJourney {name: "Terms & Conditions", type: "Microservice", technology: "AWS Lambda"}),
       (docSign:UserJourney {name: "DocSign", type: "3rd Party"}),
       (accountsContracts:UserJourney {name: "Accounts Contracts", type: "Microservice", technology: "AWS Lambda"}),
       (customerSupport:UserJourney {name: "Customer Support", type: "Microservice", technology: "AWS Lambda"}),
       (notificationService:UserJourney {name: "Notification Service", type: "Microservice", technology: "AWS Lambda"}),
       (secAndComp:UserJourney {name: "Security and Compliance", type: "Microservice", technology: "AWS Lambda"}),
       (fraudDetection:UserJourney {name: "Fraud Detection", type: "Microservice", technology: "AWS Lambda"}),
       (dataPipelines:UserJourney {name: "Data Pipelines", type: "Data Processing"}),
       (analyticsReporting:UserJourney {name: "Analytics and Reporting", type: "Microservice", technology: "AWS Lambda"})

// 1. Access the Web App
CREATE (apiGateway)-[:ROUTES_TO {data: "IP, browser, session"}]->(webAppUI)

// 2. Register and Provide Details
CREATE (apiGateway)-[:ROUTES_TO {data: "Registration Data"}]->(prospectsMS)
CREATE (prospectsMS)-[:STORES_IN]->(prospectsDB)

// 3. Verify Identity
CREATE (coreBanking)-[:VERIFIES_WITH]->(amlService)
CREATE (amlService)-[:CAPTURES_WITH]->(signatureCapture)

// 4. Agree to Terms & Conditions
CREATE (tAndC)-[:SENDS_TO]->(docSign)

// 5. Create Account
CREATE (accountsContracts)-[:CREATES_WITH]->(coreBanking)

// 6. Customer Support Interaction
CREATE (customerSupport)-[:ASSISTS]->(webAppUI)

// 7. Receive Notifications
CREATE (notificationService)-[:NOTIFIES]->(webAppUI)

// 8. Security and Compliance Check
FOREACH (comp IN [apiGateway, webAppUI, prospectsMS, prospectsDB, coreBanking, amlService, signatureCapture, tAndC, docSign, accountsContracts, customerSupport, notificationService, fraudDetection, dataPipelines, analyticsReporting] | CREATE (secAndComp)-[:MONITORS]->(comp))

// 9. Fraud Detection
CREATE (fraudDetection)-[:MONITORS]->(webAppUI)

// 10. Data Processing and Analytics
CREATE (dataPipelines)-[:SENDS_TO]->(analyticsReporting)

// 11. Completion and Access to Banking Services
FOREACH (comp IN [webAppUI, prospectsMS, prospectsDB, coreBanking, amlService, signatureCapture, tAndC, docSign, accountsContracts, customerSupport, notificationService, secAndComp, fraudDetection, dataPipelines, analyticsReporting] | CREATE (apiGateway)-[:CONNECTS_TO]->(comp))
