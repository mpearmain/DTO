# The Digital Twin for an Organisation

## Example - Digital Bank Customer Onboarding Workflow

This repository contains the workflow for onboarding a new customer into a digital banking system, serving as a comprehensive example of building a Digital Twin of an Organisation (DTO). The DTO concept provides a unifying framework for diverse implementations while ensuring consistency and alignment with the organization's goals. This example illustrates creating a seamless customer experience that maintains security, compliance, and efficiency by leveraging metadata contracts, SDKs, and other core components detailed in the accompanying paper - `Metadata Contracts: A Unified Approach to Digital Twin of an Organisation (DTO)`.

The need for a new approach in digital banking has led to the development of this workflow, focusing on implementing a fraud detection service targeting new account creation. It lays the groundwork for developing specialized banking products and services, all driven by the guiding principles of the metadata contract.

## Purpose

The purpose of this workflow is to outline the process of onboarding a new customer into a digital banking system. It details the stages involved, the components (Microservices, Third-Party Services, Data Pipelines, etc.), and the specific data flow at each stage for us to show how we can apply the concepts of components in a practical sense.

## User Journey and Components

### 1. Access the Web App
- **Purpose:** Customer accesses the bank's web application.
- **Component:** Web App (User Interface), API Gateway (Microservice).
- **Data Flow:** API Gateway routes the customer's IP, browser details, and session information to the Web App.

### 2. Register and Provide Details
- **Purpose:** Customer registers and provides personal details.
- **Component:** Prospects MS (Microservice), Prospects Database (Data Storage).
- **Data Flow:** API Gateway routes the registration data i.e. personal details (name, email, password, etc.) to the Prospects MS, which validates and stores the information in the Prospects Database.

### 3. Verify Identity
- **Purpose:** Verification of customer's identity.
- **Component:** Core Banking (3rd Party), AML (3rd Party), Signature Capture (Microservice).
- **Data Flow:** Name, DOB, address, and other identity details are sent to Core Banking and AML for verification. Signature Capture MS captures signature data.

### 4. Agree to Terms & Conditions
- **Purpose:** Customer agrees to the bank's terms and conditions.
- **Component:** Terms & Conditions (Microservice), DocSign (3rd Party).
- **Data Flow:** Customer's acceptance (timestamp, user ID) is captured by Terms & Conditions MS and sent to DocSign along with the user's email for electronic signing.

### 5. Create Account
- **Purpose:** Creation of customer's bank account.
- **Component:** Accounts Contracts (Microservice), Core Banking (3rd Party).
- **Data Flow:** Account type, user ID, and other relevant details are exchanged between Accounts Contracts MS and Core Banking to create the account.

### 6. Customer Support Interaction (Optional)
- **Purpose:** Assist if needed.
- **Component:** Customer Support (Microservice or 3rd Party).
- **Data Flow:** Customer queries (text, user ID) are sent to Customer Support, and responses are returned to the Web App.

### 7. Receive Notifications
- **Purpose:** Notify customer about account status.
- **Component:** Notification Service (Microservice).
- **Data Flow:** Notification details (user ID, email, SMS number, message content) are sent from Notification Service MS to the customer's contact methods.

### 8. Security and Compliance Check
- **Purpose:** Ensure data security and regulatory compliance.
- **Component:** Security and Compliance (Microservice or 3rd Party).
- **Data Flow:** Security and Compliance monitor and log all data exchanges for audit purposes.

### 9. Fraud Detection (Optional)
- **Purpose:** Monitor for suspicious activities.
- **Component:** Fraud Detection (3rd Party or Microservice).
- **Data Flow:** Transaction and activity data (user ID, account details, actions) are analyzed by Fraud Detection.

### 10. Data Processing and Analytics
- **Purpose:** Process and analyze customer data.
- **Component:** Data Pipelines (Data Processing), Analytics and Reporting (Microservice).
- **Data Flow:** All customer interactions, transactions, and activities are collected, transformed, and analyzed through Data Pipelines and Analytics MS.

### 11. Completion and Access to Banking Services
- **Purpose:** Provide access to banking services.
- **Component:** Various microservices through API Gateway.
- **Data Flow:** Ongoing data exchange (account balances, transaction history, user preferences) between Web App and various microservices through API Gateway.


Example of components for the account management domain, their responsibilities, input/output ports, potential connections, and example technologies for AWS, Azure, and open-source solutions:

---

1. **Schema Registry Component**:
   - **Responsibility**: Centralized service for schema storage, evolution, and retrieval.
   - **Input Ports**: New schema registrations, schema updates, schema retrieval requests.
   - **Output Ports**: Registered schema details, schema validation results.
   - **Connects to**: Message Bus, Account Management Service, Data Validation Component.
   - **Technologies**:
     - **AWS**: AWS Glue Schema Registry
     - **Azure**: Azure Schema Registry
     - **OSS**: Confluent Schema Registry, Apicurio

---

2. **Event Logger Component**:
   - **Responsibility**: Logs all events or messages for auditing, debugging, and monitoring.
   - **Input Ports**: Events or messages from various services.
   - **Output Ports**: Logged event details.
   - **Connects to**: All components to capture logs.
   - **Technologies**:
     - **AWS**: AWS CloudWatch
     - **Azure**: Azure Monitor
     - **OSS**: ELK Stack (Elasticsearch, Logstash, Kibana), Grafana

---

3. **Authentication & Authorization Component**:
   - **Responsibility**: Validates user credentials and permissions.
   - **Input Ports**: User credentials, permission checks.
   - **Output Ports**: Authentication status, authorization results.
   - **Connects to**: Gateway, Account Management Service.
   - **Technologies**:
     - **AWS**: AWS Cognito, AWS IAM
     - **Azure**: Azure Active Directory
     - **OSS**: Keycloak, OAuth2, OIDC

---

4. **Error Handling & Notification Component**:
   - **Responsibility**: Catches errors, logs them, and notifies stakeholders.
   - **Input Ports**: Errors or exceptions.
   - **Output Ports**: Error logs, notifications.
   - **Connects to**: All components to capture errors.
   - **Technologies**:
     - **AWS**: AWS SNS (Simple Notification Service), AWS Lambda
     - **Azure**: Azure Logic Apps, Azure Monitor
     - **OSS**: Sentry, Grafana alerts

---

5. **Monitoring & Health Check Component**:
   - **Responsibility**: Monitors health and performance.
   - **Input Ports**: Health check requests, performance metrics.
   - **Output Ports**: Health status, performance reports.
   - **Connects to**: All components for health checks.
   - **Technologies**:
     - **AWS**: AWS CloudWatch, AWS X-Ray
     - **Azure**: Azure Monitor, Azure Application Insights
     - **OSS**: Prometheus, Grafana

---

6. **Data Validation Component**:
   - **Responsibility**: Validates data formats and constraints.
   - **Input Ports**: Data to be validated.
   - **Output Ports**: Validation results.
   - **Connects to**: Schema Registry, Account Management Service.
   - **Technologies**:
     - **AWS**: AWS Lambda (custom validation logic)
     - **Azure**: Azure Functions (custom validation logic)
     - **OSS**: JSON Schema, XML Schema

---

7. **Gateway Component**:
   - **Responsibility**: Entry point for external requests, routes them to appropriate services.
   - **Input Ports**: External API requests.
   - **Output Ports**: Responses from services.
   - **Connects to**: Authentication & Authorization Component, Account Management Service.
   - **Technologies**:
     - **AWS**: Amazon API Gateway
     - **Azure**: Azure API Management
     - **OSS**: Kong, Nginx

---

8. **Message Bus Component**:
   - **Responsibility**: Facilitates communication between services.
   - **Input Ports**: Messages from producers.
   - **Output Ports**: Messages to consumers.
   - **Connects to**: Account Management Service, Schema Registry, Data Validation Component.
   - **Technologies**:
     - **AWS**: Amazon SNS, Amazon SQS
     - **Azure**: Azure Service Bus
     - **OSS**: Apache Kafka, RabbitMQ

---

9. **Account Management Service Component**:
   - **Responsibility**: Handles business logic for account operations.
   - **Input Ports**: Account CRUD operations, account queries.
   - **Output Ports**: Operation results, events.
   - **Connects to**: Database, Message Bus, Data Validation Component.
   - **Technologies**:
     - **AWS**: AWS Lambda, AWS Fargate
     - **Azure**: Azure Functions, Azure Kubernetes Service
     - **OSS**: Node.js, Spring Boot

---

10. **Account Database Component**:
   - **Responsibility**: Stores account data.
   - **Input Ports**: CRUD operations.
   - **Output Ports**: Query results, operation status.
   - **Connects to**: Account Management Service.
   - **Technologies**:
     - **AWS**: Amazon RDS, Amazon DynamoDB
     - **Azure**: Azure SQL Database, Azure Cosmos DB
     - **OSS**: PostgreSQL, MongoDB

---

This comprehensive list provides a clear separation of concerns, ensuring that each component has a specific responsibility. By connecting these components through their input and output ports, you can create a robust and scalable account management domain.




---

