# UFCFTR-30-3 Enterprise Systems - Assessment Task 1

## Use Case
**Use Case 1:** Producer Product Listing and Inventory Management

## Project Overview
This repository contains the artefacts for the enterprise marketplace system. The project is built using a sprint-based approach, progressing from strategic enterprise analysis to executable Camunda process automation, while maintaining full traceability from socio-technical models to code.

---

## Sprint 1 Artefacts (Foundation)
*   **Strategic BPMN (`strategic-bpmn.bpmn`):** High-level enterprise model showing 4 Pools (Producer, Marketplace, Verification Service, Customer) and functional Lanes.
*   **Operational BPMN (`diagram_1.bpmn`):** Detailed process for product listing. Includes an Exclusive Gateway (Organic vs. Non-Organic) and initial service tasks.
*   **Camunda Forms (`Producer_Submission_Form.form`, `Admin_Review_Form.form`):** Linked to User Tasks to capture process variables (`productName`, `isOrganic`).
*   **Product Backlog (`product-backlog.md`):** Initial prioritized user stories.

## Sprint 2 Updates (Stand-up 1 & 2)
### 1. Operational BPMN Enhancements (Azan)
*   **Parallel Gateway:** Added to trigger the 'Send Confirmation Email' service task concurrently with the organic verification process.
*   **Timer Boundary Event:** Added a 10-second timeout to the external verification task. If the API does not respond, the process routes to the Admin Manual Review task to prevent system crashes.
*   **Input/Output Mappings:** Implemented variable mappings (`requestedProduct` and `isVerified`) to ensure data flows correctly between the process and the external API.

### 2. Node.js External Task Worker (Azan)
*   Created a local `worker.js` file using the `@camunda8/sdk`.
*   The worker listens to the `verify-certification` topic, simulates an API delay, and returns the `isVerified: true` variable to Camunda to resolve the Sprint 1 incident.

### 3. Strategic BPMN Expansion (Saqlain)
*   Added Payment Gateway and Email Notification Service as external "Black Box" partners.
*   Introduced Data Objects (`Product Data`, `Verified Catalog`) to track information flow.
*   Abstracted the validation process into a Collapsed Sub-Process to maintain enterprise-level readability.

### 4. Socio-Technical Analysis & LESP (Faizan, Umiar, Hanan)
*   **i* Models & Traceability (`docs/`):** Mapped the Strategic Dependency (SD) and Strategic Rationale (SR) models, including traceability linking i* goals to the BPMN tasks.
*   **Acceptance Criteria (`User_Stories.md`):** Expanded the backlog with detailed edge cases and acceptance criteria for the Admin Review and Organic Certification flows.
*   **LESP Analysis (`LESP-Analysis.md`):** Documented Legal, Ethical, Social, and Professional implications, specifically focusing on GDPR compliance and the ethical necessity of the timer boundary event (ensuring unverified food isn't sold).

---

## How to Run the Project

### 1. Start the Camunda Engine
1. Open a terminal (Command Prompt) and navigate to your Camunda run folder (e.g., `cd /d D:\Camunda\c8run-8.10.0-alpha5`).
2. Start the engine: `.\c8run.exe start`
3. Wait for the Operate window to open automatically in your browser (`localhost:8080`).

### 2. Deploy the BPMN
1. Open **Camunda Modeler**.
2. Ensure the local `c8run` engine is running.
3. Click **Deploy** and ensure all `.bpmn` and `.form` files are checked.
4. Use the **Run** button to start a process instance.

### 3. Start the External Worker
1. Open a **new** terminal and navigate to the worker folder: `cd /d D:\camunda-worker`
2. Install dependencies (only needed once): `npm install`
3. Start the worker: `node worker.js`
4. You should see: `"Worker started! Listening for 'verify-certification' tasks..."`

---

## Team & Contributions
*   **Saqlain (Lead Architect):** Strategic BPMN, Enterprise Data Objects, Backlog.
*   **Azan (Lead Developer):** Operational BPMN, Node.js Worker, Camunda Forms, Input/Output Mappings.
*   **Faizan (Analyst):** i* Socio-Technical Models.
*   **Umiar (Analyst):** Traceability Matrix & Acceptance Criteria.
*   **Hanan (Compliance):** LESP Analysis & Risk Mitigation.
