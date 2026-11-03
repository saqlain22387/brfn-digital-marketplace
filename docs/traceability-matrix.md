# Traceability Matrix

This document links our i* models, Strategic BPMN, Operational BPMN, and Camunda implementation.

| ID | Stakeholder Goal (i*) | i* Dependency | Strategic BPMN | Operational BPMN | Camunda Element | Acceptance Criteria | Status |
|---|---|---|---|---|---|---|---|
| TR-01 | Producer: Product listed | Producer -> Marketplace: Listing published | Product Listing Sub-Process | Submit Listing Task | product-listing.form | US-01 | In Progress |
| TR-02 | Marketplace: Valid data | Marketplace -> Producer: Correct info | Validate Listing Task | Validate Gateway | Form Validation | US-02 | Planned ||
