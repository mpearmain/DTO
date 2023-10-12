// Create nodes for User Journey Components
CREATE (a:UserJourney {name: "API Gateway", type: "Microservice", technology: "AWS Lambda"}),
       (b:UserJourney {name: "Web App (UI)", type: "User Interface"}),
       (c:UserJourney {name: "Prospects MS", type: "Microservice", technology: "AWS Lambda"}),
       (d:UserJourney {name: "Prospects Database", type: "Data Storage", technology: "Amazon RDS"}),
       (e:UserJourney {name: "Core Banking", type: "3rd Party"}),
       (f:UserJourney {name: "AML", type: "3rd Party"}),
       (g:UserJourney {name: "Signature Capture", type: "Microservice", technology: "AWS Lambda"}),
       (h:UserJourney {name: "Terms & Conditions", type: "Microservice", technology: "AWS Lambda"}),
       (i:UserJourney {name: "DocSign", type: "3rd Party"}),
       (j:UserJourney {name: "Accounts Contracts", type: "Microservice", technology: "AWS Lambda"}),
       (k:UserJourney {name: "Customer Support", type: "Microservice", technology: "AWS Lambda"}),
       (l:UserJourney {name: "Notification Service", type: "Microservice", technology: "AWS Lambda"}),
       (m:UserJourney {name: "Security and Compliance", type: "Microservice", technology: "AWS Lambda"}),
       (n:UserJourney {name: "Fraud Detection", type: "Microservice", technology: "AWS Lambda"}),
       (o:UserJourney {name: "Data Pipelines", type: "Data Processing"}),
       (p:UserJourney {name: "Analytics and Reporting", type: "Microservice", technology: "AWS Lambda"})
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 1. Access the Web App
MATCH (a:UserJourney {name: "API Gateway"}), (b:UserJourney {name: "Web App (UI)"})
CREATE (a)-[:ROUTES_TO {data: "IP, browser, session"}]->(b)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 2. Register and Provide Details
MATCH (a:UserJourney {name: "API Gateway"}), (c:UserJourney {name: "Prospects MS"})
CREATE (a)-[:ROUTES_TO {data: "Registration Data"}]->(c)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p
MATCH (c:UserJourney {name: "Prospects MS"}), (d:UserJourney {name: "Prospects Database"})
CREATE (c)-[:STORES_IN]->(d)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 3. Verify Identity
MATCH (e:UserJourney {name: "Core Banking"}), (f:UserJourney {name: "AML"})
CREATE (e)-[:VERIFIES_WITH]->(f)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p
MATCH (f:UserJourney {name: "AML"}), (g:UserJourney {name: "Signature Capture"})
CREATE (f)-[:CAPTURES_WITH]->(g)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 4. Agree to Terms & Conditions
MATCH (h:UserJourney {name: "Terms & Conditions"}), (i:UserJourney {name: "DocSign"})
CREATE (h)-[:SENDS_TO]->(i)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 5. Create Account
MATCH (j:UserJourney {name: "Accounts Contracts"}), (e:UserJourney {name: "Core Banking"})
CREATE (j)-[:CREATES_WITH]->(e)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 6. Customer Support Interaction
MATCH (k:UserJourney {name: "Customer Support"}), (b:UserJourney {name: "Web App (UI)"})
CREATE (k)-[:ASSISTS]->(b)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 7. Receive Notifications
MATCH (l:UserJourney {name: "Notification Service"}), (b:UserJourney {name: "Web App (UI)"})
CREATE (l)-[:NOTIFIES]->(b)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 8. Security and Compliance Check
MATCH (m:UserJourney {name: "Security and Compliance"})
FOREACH (comp IN [a, b, c, d, e, f, g, h, i, j, k, l, n, o, p] | CREATE (m)-[:MONITORS]->(comp))
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 9. Fraud Detection
MATCH (n:UserJourney {name: "Fraud Detection"}), (b:UserJourney {name: "Web App (UI)"})
CREATE (n)-[:MONITORS]->(b)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 10. Data Processing and Analytics
MATCH (o:UserJourney {name: "Data Pipelines"}), (p:UserJourney {name: "Analytics and Reporting"})
CREATE (o)-[:SENDS_TO]->(p)
WITH a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

// 11. Completion and Access to Banking Services
MATCH (a:UserJourney {name: "API Gateway"})
FOREACH (comp IN [b, c, d, e, f, g, h, i, j, k, l, m, n, o, p] | CREATE (a)-[:CONNECTS_TO]->(comp))