# Traceability Matrix

This document links our i* models, Strategic BPMN, Operational BPMN, and Camunda implementation.

| ID | Stakeholder Goal (i*) | i* Dependency | Strategic BPMN | Operational BPMN | Camunda Element | Acceptance Criteria | Status |
|---|---|---|---|---|---|---|---|
| TR-01 | Producer: Product listed | Producer -> Marketplace: Listing published | Product Listing Sub-Process | Submit Listing Task | product-listing.form | US-01 | Complete |
| TR-02 | Marketplace: Valid data | Marketplace -> Producer: Correct info | Validate Listing Task | Validate Gateway | Form Validation | US-02 | Complete ||
| TR-03 | Marketplace: Safe food | Marketplace -> Admin: Review product | Product Listing Sub-Process | Admin Review Task | Admin_Review_Form.form | US-04 | Complete |
| TR-04 | Customer: Trust organic | Marketplace -> Ext Service: Verify cert | Product Listing Sub-Process | Verify Certification Service Task | Service Task (API) | US-03 | Complete|
| TR-05 | Producer: Accurate stock | Producer -> Marketplace: Update stock | Inventory Management | Update Stock Task | `stockLevel` Variable / Gateway | US-05, US-06 | In Progress |
| TR-06 | Marketplace: Prevent out-of-season sales | Marketplace -> System: Check dates | Inventory Management | Seasonal Check Gateway | Date comparison logic in `worker.js` | US-07 | In Progress |
| TR-07 | Marketplace: Handle service failure | Marketplace -> Admin: Manual review | Product Listing | Boundary Timer Event (PT10S) | Routes to `Admin_Review_Form.form` | AC-04 | In Progress |
