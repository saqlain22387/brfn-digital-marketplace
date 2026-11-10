# Sprint 2 User Stories

* **US1:** As a **Producer**, I want to submit my product details so that it can be published on the marketplace.
  * **AC1:** The form must reject submission if mandatory fields (Name, Price, Stock, Category) are empty.
* **US2:** As a **Marketplace System**, I need to validate the submitted form so that incomplete or invalid listings are rejected.
  * **AC2:** The system must display a clear error message if the price is negative or stock is not a number.
* **US3:** As a **Marketplace System**, I need to verify organic certifications externally so that customers are not misled.
  * **AC3:** If organic is claimed, the system must call the verification service and timeout after 10 seconds.
* **US4:** As a **Marketplace Administrator**, I want to be notified if the external verification service fails so that I can manually review the product.
  * **AC4:** If the service times out, the process must route to the Admin Review Form.
* **US5:** As a **Producer**, I want my product to automatically become unavailable when stock reaches zero so that customers don't order out-of-stock items.
  * **AC5:** When inventory updates to 0, the product status must change to "Unavailable".
* **US6:** As a **Producer**, I want my product to become available again when I replenish stock so that I can continue selling.
  * **AC6:** When stock is > 0 and the current date is within the seasonal window, the product status must change to "Available".
* **US7:** As a **Marketplace System**, I need to make products unavailable outside their seasonal availability period so that customers don't buy out-of-season goods.
  * **AC7:** If the current date is past the availability period, the product status must change to "Unavailable".
