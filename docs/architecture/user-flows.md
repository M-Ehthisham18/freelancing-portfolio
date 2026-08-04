# User Flows

This document defines the behavioral paths users take through the application.
Graphify uses this to create `PARTICIPATES_IN` and `FLOWS_TO` relationships.

## Flow: Lead Conversion Journey
**Description**: The primary path from initial landing to booking a consultation.
- **Step 1: Landing** -> `Hero` (User sees value proposition)
- **Step 2: Validation** -> `Projects` (User verifies competence via portfolio)
- **Step 3: Understanding** -> `Services` (User identifies a matching offering)
- **Step 4: Trust Building** -> `Process` / `FAQ` / `WhyChooseMe` (User validates reliability)
- **Step 5: Action** -> `CTA` or `Header` (User clicks "Book a Free Consultation")
- **Step 6: Conversion** -> `External Booking Link / Contact Form`

## Flow: Navigation Path
**Description**: How users move between content sections using the UI.
- **Entry**: `Header` (Navigation Links)
- **Target**: `Hero` -> `Services` -> `Process` -> `Projects` -> `Contact`
- **Loop**: `Footer` -> `Header` (Return to top)
