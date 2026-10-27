# Team Roles and Responsibilities

**Project:** Bristol Regional Food Network (BRFN) – Digital Marketplace (Task 1)
**Start date:** 28 October 2026 · **Team size:** 5 · **Share per member:** 20% each

## The project in plain English

We are modelling and automating two parts of an online marketplace that connects about 40 local food producers with customers.

| | What it does | In one sentence |
|---|---|---|
| **F1 – Product Listing and Inventory** | Producer lists a product, the system checks it (and verifies organic claims), then publishes it | "A producer can put food on sale, and nothing is published unchecked." |
| **F2 – Multi-Vendor Order, Checkout and Payment** | Customer buys from several producers in one checkout, the order is split, 5% commission is taken, payment is made | "A customer pays once and every producer gets its own clear order." |

**How we get there (four simple steps):**

1. **Analyse** – understand the enterprise and draw the big picture (strategic BPMN).
2. **Design** – design F1 and F2 in detail (i* goal/dependency models and operational BPMN).
3. **Build** – run F1 and F2 in Camunda, using Docker mock services for payment, certification and notifications.
4. **Show** – demo it, explain it, and show who did what in the repo.

## The team

| Role | Member | Student ID | Session slot (as given) | Share |
|---|---|---|---|---|
| [1 – Project Lead, Forms and QA](role-1-saqlain-project-lead.md) **(Team Leader)** | Muhammad Saqlain | 24061984 | Tuesday 13:00–15:00 | 20% |
| [2 – Modelling and Traceability Lead](role-2-azan-modelling-lead.md) | Azan Tariq | 24041851 | not provided | 20% |
| [3 – F1 Owner: Product Listing and Inventory](role-3-umair-f1-product-listing.md) | Muhammad Umair | 24041606 | Wednesday 9–11 | 20% |
| [4 – F2 Owner: Order, Checkout and Payment](role-4-faizan-f2-order-payment.md) | Muhammad Faizan | 24050931 | Wednesday 9–11 | 20% |
| [5 – Services and Integration Lead](role-5-hanan-services-integration.md) | Abdul Hanan | 24052802 | Wednesday 9–11 | 20% |

The five roles match the five workstreams already used in the Sprint 1 plan (Project management, Modelling, F1, F2, Services), so every part of the project has exactly one owner.

## How each 20% is made up

Everyone has the **same structure**, so the split is equal by design:

| Part | Share | What it covers |
|---|---|---|
| **Main area** | 12% | The deliverables in your own role file |
| **Present and explain** | 4% | Stand-ups, review presentation, answering questions about the *whole* project |
| **Peer review** | 2% | Reviewing your review partner's work before it counts as Done |
| **Log your work** | 2% | Commits with backlog IDs and your own contribution log |
| **Total** | **20%** | |

If one main area turns out heavier than another, tell the Project Lead and move small tasks across. Do not leave the imbalance unspoken.

## Review partners

Each person reviews one teammate and is reviewed by one teammate.

| Reviewer | Reviews |
|---|---|
| Saqlain (Role 1) | Azan (Role 2) |
| Azan (Role 2) | Umair (Role 3) |
| Umair (Role 3) | Faizan (Role 4) |
| Faizan (Role 4) | Hanan (Role 5) |
| Hanan (Role 5) | Saqlain (Role 1) |

## Team rules

1. **One backlog ID per commit message**, for example `PB-62: F1 scope updated`. This is how the history proves who did what.
2. **Done means reviewed.** An item is Done only when the review partner has looked at it and it is traced to a stakeholder goal.
3. **Log only what you personally did.** The contribution log in your role file records your real work. The 20% above is the *planned* share, not a record of work done.
4. **Diagrams are drawn by us.** The Sprint 1 pack states that the brief does not allow AI-generated diagrams, so the strategic BPMN and all later BPMN must be drawn by hand in Camunda Modeler. Any AI help is recorded in `AI-USE-LOG.md`.
5. **Draft files are starting points.** The Sprint 1 pack already contains drafts (process analysis, F1/F2 scope, plan). Each owner reads their drafts, corrects them, and must be able to explain them in their own words before presenting them.
6. **Everyone can explain everything.** Reviewers may question any member about any part of the project.

## Stand-up template (about one minute, first person)

1. **Done** since the last stand-up.
2. **Next** before the following stand-up.
3. **Blockers** and dependencies.
4. **Evidence** – the commit, file or board item that proves it.
5. **Fit** – how it helps the current sprint's goal.

## Open items to confirm

- Written approval of F1 and F2 from the module team (Q1).
- Camunda version (Q2). The pack assumes Camunda 8 until confirmed.
