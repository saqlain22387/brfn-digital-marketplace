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
* Other members (0% - unresponsive)
