# Sprint 3 Demo Script

**1. Introduction (1 min) - [Name]**
- Briefly introduce the team and the chosen Use Case (Producer Product Listing and Inventory Management).
- Show the i* SD/SR models and the Strategic BPMN. Explain the business goals.

**2. Functionality 1: Product Listing & Verification (3 mins) - Azan**
- Show the Camunda Form (`Producer_Submission_Form.form`).
- Submit a product with an organic claim.
- Show the Service Task calling the external API (`worker.js`).
- **Exception Path:** Show what happens if the API times out (10-second timer) and how it routes to the Admin Review Form.

**3. Functionality 2: Inventory & Seasonal Availability (3 mins) - Azan**
- Show the producer updating the stock to 0. Prove the product becomes unavailable.
- Replenish the stock. Prove it becomes available again (if within season).
- Show the date check logic for out-of-season products.

**4. Traceability & LESP (2 mins) - Umair & Hanan**
- Umair: Open the `traceability-matrix.md` and explain how a stakeholder goal links to the Camunda code.
- Hanan: Explain 2 key LESP points (e.g., Data Protection for producers, Consumer Protection for accurate stock).

**5. Q&A (5 mins) - Everyone**
- Be prepared to answer questions about your specific roles.
