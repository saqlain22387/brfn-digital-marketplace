# UFCFTR-30-3 Enterprise Systems - Sprint 2 Submission

## Use Case
**Use Case 1:** Producer Product Listing and Inventory Management

## Project Overview
This repository contains our Sprint 2 implementation for the enterprise marketplace system. The project demonstrates the full progression from socio-technical strategic analysis to fully executable Camunda process automation. 

## 🚀 Sprint 2 Key Features & Upgrades

### 1. Strategic Enterprise Architecture
*   **External Partners:** Modelled Payment Gateway and Email Notification Service as external "Black Box" pools.
*   **Data Flow:** Introduced Data Objects to track the transformation from `Product Data` to `Verified Catalog`.
*   **Abstraction:** Used a Collapsed Sub-Process for complex listing management to maintain executive-level readability.
*   **Socio-Technical Fallback:** Modelled the Admin lane in the Verification Service to handle manual reviews if the external API fails.

### 2. Operational Automation & Code
*   **Product Listing Process:** Includes a Parallel Gateway for concurrent emailing, a 10-second Timer Boundary Event to handle API timeouts gracefully, and optimized routing.
*   **Inventory Management Process:** A second, fully operational BPMN using FEEL expressions (`newQuantity > 0`) to automatically mark products as Available or Unavailable based on stock levels.
*   **Node.js Worker:** A custom external task worker built with `@camunda8/sdk` to handle the `verify-certification` and `update-inventory` topics.

## 📂 Repository Structure
*   📁 **`/models`**: Contains all Strategic and Operational BPMN files (`.bpmn`).
    *   📁 **`/models/forms`**: Contains all linked Camunda Forms (`.form`).
*   📁 **`/worker`**: Contains the Node.js external task worker code (`worker.js`, `package.json`).
*   📁 **`/docs`**: Contains the LESP analysis, Traceability Matrix, and Product Backlog.
*   📄 **`Evidence.md`**: Contains screenshots of our Kanban board, worker terminal execution, and Camunda Operate dashboard.
*   📄 **`SD model.png` / `SR model.png`**: Socio-technical i* models.

## 🛠️ How to Run the Project
### 1. Start the Camunda Engine
1. Open a terminal and navigate to your Camunda folder (e.g., `cd /d D:\Camunda\c8run-8.10.0-alpha5`).
2. Start the engine: `.\c8run.exe start`
3. Wait for Operate to open in your browser (`localhost:8080`).

### 2. Start the External Worker
1. Open a new terminal and navigate to the `worker` folder.
2. Install dependencies (only needed once): `npm install`
3. Start the worker: `node worker.js`
4. You should see: `"Workers started! Listening for 'verify-certification' and 'update-inventory' tasks..."`

### 3. Deploy and Run
1. Open **Camunda Modeler**.
2. Click **Deploy** and ensure all `.bpmn` and `.form` files are checked.
3. Click **Run** to start a process instance and interact with it in the Tasklist.

## 👥 Team & Contributions
*   **Saqlain:** Strategic BPMN & Enterprise Architecture
*   **Azan:** Operational BPMN, Camunda Forms & Node.js Worker
*   **Faizan:** i* Socio-Technical Models
*   **Umiar:** Traceability Matrix & Acceptance Criteria
*   **Hanan:** LESP Analysis & Risk Mitigation
