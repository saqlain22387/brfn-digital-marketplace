# UFCFTR-30-3 Enterprise Systems - Task 1 (Sprint 1)

## Use Case
Use Case 1: Producer Product Listing and Inventory Management

## Project Overview
This repository contains the Sprint 1 artefacts for the enterprise marketplace system. 
In Sprint 1, we focused on strategic process analysis, project setup, and establishing the initial executable BPMN processes in Camunda 8.

## Artifacts Included
* **Strategic BPMN (`strategic-bpmn.bpmn`)**: High-level enterprise model showing 4 Pools (Producer, Marketplace, Verification Service, Customer) and functional Lanes, demonstrating message flows and service dependencies.
* **Operational BPMN (`operational-bpmn.bpmn`)**: Detailed process for product listing. Includes an Exclusive Gateway (Organic vs. Non-Organic), an External Service Task (Verification), and a Boundary Error Event handling service unavailability.
* **Camunda Forms (`Producer_Submission_Form.form`, `Admin_Review_Form.form`)**: Linked to User Tasks to capture process variables (`productName`, `isOrganic`).
* **Product Backlog (`product-backlog.md`)**: Initial prioritized user stories.

## How to Run (Camunda 8 Run)
1. Open Camunda Modeler.
2. Ensure the local `c8run` engine is running.
3. Click "Deploy" and ensure all `.bpmn` and `.form` files are checked.
4. Use the "Run" button to start an instance and complete tasks in the local Tasklist (`localhost:8080`).

## Team
* Saqlain (50%)
* Azan (50%)
* Other members (0% - unresponsive)## Sprint 2 Updates (Stand-up 1 & 2)

### 1. Operational BPMN Enhancements
* **Parallel Gateway:** Added to trigger the 'Send Confirmation Email' service task concurrently with the organic verification process.
* **Timer Boundary Event:** Added a 10-second timeout to the external verification task. If the API does not respond, the process routes to the Admin Manual Review task to prevent system crashes.
* **Input/Output Mappings:** Implemented variable mappings (`requestedProduct` and `isVerified`) to ensure data flows correctly between the process and the external API.

### 2. Node.js External Task Worker
* Created a local `worker.js` file using the `@camunda8/sdk`.
* The worker listens to the `verify-certification` topic, simulates an API delay, and returns the `isVerified: true` variable to Camunda.

### 3. How to Run the Worker
1. Open a terminal in the `/camunda-worker` directory.
2. Run `npm install` to install dependencies.
3. Run `node worker.js` to start the worker.
4. Ensure the Camunda 8.10 local engine is running before starting the worker.
