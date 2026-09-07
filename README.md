# StudioDev — Freelancing Portfolio

A modern, responsive freelancing portfolio built to showcase web development services, selected projects, technical capabilities, and provide a structured project-inquiry experience for prospective clients.

StudioDev is operated by **Ehthisham Ul Haq** and is designed primarily for international freelance clients looking for modern websites, custom web applications, and scalable digital products.

## Live Website

**Production:**
https://freelancing-portfolio-sigma-eight.vercel.app/

---

## Overview

StudioDev is a production-focused portfolio built with modern web technologies and structured using reusable components, responsive layouts, SEO-friendly metadata, accessible UI patterns, and a server-side project inquiry workflow.

The project was developed with a strong focus on:

* Performance
* Responsive design
* Accessibility
* SEO
* Maintainability
* Clean component architecture
* Production readiness
* Client conversion
* Privacy and operational safety

---

## Features

### Marketing Website

* Responsive landing page
* Services section
* Technology stack showcase
* Development process section
* Why Choose Me section
* Featured project showcase
* FAQ section
* Contact / consultation CTA
* Custom cursor experience for desktop
* Responsive navigation and footer

### Project Pages

Dynamic project detail pages are generated using project slugs.

Current projects include:

* Chit-Chat
* AI Productivity Assistant
* Business Dashboard

Each project page supports:

* Project overview
* Technology information
* Project-specific metadata
* SEO-friendly canonical URLs
* Responsive project presentation
* Invalid slug handling

> Live-project links are intentionally disabled at the moment and should remain disabled consistently until a future portfolio-wide decision enables them.

---

## Contact & Project Inquiry System

The portfolio includes a structured project inquiry form designed for real client conversations.

### API

```text
POST /api/contact
```

The API performs:

* Request body size validation
* Server-side input validation
* Email validation
* Field length enforcement
* Submission rate limiting
* Inquiry notification email delivery
* Inquiry persistence
* Graceful degraded handling when persistence fails

### Rate Limit

```text
5 submissions per email per day
```

### Maximum Request Body

```text
64 KB
```

### Main Required Fields

| Field               | Validation                      |
| ------------------- | ------------------------------- |
| Name                | 2–100 characters                |
| Email               | Valid email, max 254 characters |
| Project Type        | Max 100 characters              |
| Project Description | 20–5000 characters              |

Additional optional fields also have server-side limits.

---

## Inquiry Retention

Stored inquiries include:

```text
retentionReviewAt
```

This value is calculated as approximately:

```text
receivedAt + 24 months
```

The current system uses **manual retention review**.

There is currently:

* No automatic deletion
* No MongoDB TTL deletion policy

The retention field exists to make records eligible for future review and deletion workflows.

---

## Technology Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* Lucide React

### Backend

* Next.js App Router
* Next.js Route Handlers
* TypeScript

### Email

* Resend

### Database

* MongoDB Atlas

### Deployment

* Vercel

### Fonts

Fonts are handled through:

```text
next/font
```

---

## Project Structure

A simplified view of the application architecture:

```text
freelancing-portfolio/
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── privacy/
│   ├── terms/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── cards/
│   ├── sections/
│   ├── ui/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   └── Section.tsx
│
├── lib/
│   └── email.ts
│
├── docs/
│   └── inquiry-retention.md
│
├── public/
│
├── CLAUDE.md
├── project.md
├── .env.example
├── package.json
└── README.md
```

The exact structure may evolve over time. The repository remains the implementation source of truth.

---

## Getting Started

### Prerequisites

Install:

* Node.js
* npm
* Git

A current Node.js LTS release is recommended.

---

## Clone the Repository

```bash
git clone <repository-url>
cd freelancing-portfolio
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Configure the required values.

Typical environment variables include:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
MONGODB_URI=
```

Never commit real secrets to Git.

The repository's `.env.example` should be treated as the authoritative reference for currently required configuration.

---

## Run the Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Production Build

Before merging or deploying significant changes:

```bash
npm run build
```

A successful production build is a required validation step.

---

## Linting

Run:

```bash
npm run lint
```

Changes should not introduce new lint failures.

---

## Quality Assurance

The project has undergone dedicated production QA and responsive testing.

Final Lighthouse testing during the QA sprint achieved results approximately in the following range:

| Category       | Result |
| -------------- | -----: |
| Performance    |    92+ |
| Accessibility  |     98 |
| Best Practices |    100 |
| SEO            |    100 |

Performance varies by route, device, environment, network conditions, and Lighthouse execution.

Important routes tested include:

```text
/
```

```text
/contact
```

```text
/projects/chit-chat
```

---

## SEO

The website includes foundational technical SEO implementation such as:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Twitter metadata
* Robots configuration
* Sitemap
* Project-specific metadata
* Social preview support

Technical Lighthouse SEO scoring has reached:

```text
100
```

However, technical SEO does not guarantee strong search rankings.

Future SEO improvements should focus on:

* Buyer-intent keywords
* Service-specific content
* Geographic targeting
* Internal linking
* Structured data
* Authority signals
* Search-focused landing pages
* Content strategy

---

## AEO & GEO

Answer Engine Optimization and Generative Engine Optimization remain ongoing areas of improvement.

Future improvements may include:

* More explicit service answers
* Better structured FAQ content
* Schema.org structured data
* Organization / ProfessionalService schema
* Service schema
* Project / portfolio structured data
* Entity consistency
* Citation-friendly content
* Stronger semantic relationships between services, expertise, location, and target customers

A high traditional SEO score should not be interpreted as equivalent to high AEO or GEO performance.

---

## Accessibility

Accessibility has been considered throughout the project.

The implementation includes work around:

* Semantic structure
* Keyboard usability
* Responsive layouts
* Accessible interactive elements
* Contrast
* Navigation
* SVG icon accessibility
* Form usability

Accessibility should continue to be regression-tested whenever major UI changes are introduced.

---

## Responsive Design

The website follows a mobile-first responsive strategy.

Significant responsive work has been completed for:

* Hero layout
* Service cards
* Project cards
* Section spacing
* Typography
* Header
* Footer
* Process section
* Technology section
* CTA sections
* FAQ
* Custom cursor behavior

Desktop design should not be modified in ways that unintentionally regress the accepted mobile implementation.

---

## Custom Cursor

Desktop devices include a custom cursor interaction.

The cursor implementation has specific layering behavior for hoverable and elevated cards.

When modifying interactive card components, verify:

* Pointer visibility
* Cursor follower visibility
* Hover elevation
* `z-index`
* `pointer-events`
* Transforms
* Stacking contexts

Mobile and touch devices should not depend on custom cursor functionality.

---

## Legal Pages

The website contains:

* Privacy Policy
* Website Terms

Public identity is currently presented as:

```text
StudioDev, operated by Ehthisham Ul Haq
```

The website does not currently publish a physical business address.

### Important

The governing-law / jurisdiction decision remains intentionally deferred and should be finalized before treating the public Terms as fully settled legal documentation.

Legal pages should be reviewed whenever:

* Data collection changes
* Analytics are introduced
* Third-party services change
* Payment processing is added
* Authentication is introduced
* Cookies or tracking technologies are added
* Inquiry retention behavior changes

---

## Security

Current safeguards include server-side validation and rate limiting.

Future hardening may include:

* IP-aware rate limiting
* Cloudflare Turnstile or CAPTCHA
* Honeypot fields
* Origin validation
* Referer validation
* Stronger abuse detection
* Enhanced operational monitoring

Security controls should evolve alongside real traffic and business requirements rather than being added without justification.

---

## Deployment

The production application is deployed through **Vercel**.

Before production deployment:

```bash
npm run lint
npm run build
```

Also verify:

* Environment variables
* Contact form
* Email delivery
* Database connectivity
* Dynamic project pages
* Privacy and Terms pages
* Metadata
* Canonical URLs
* Mobile layout
* Desktop layout

---

## Git Workflow

Major work should be developed in bounded branches rather than making uncontrolled changes directly on production code.

Typical workflow:

```text
main
  ↓
sprint / feature branch
  ↓
bounded implementation
  ↓
lint
  ↓
build
  ↓
QA
  ↓
review
  ↓
merge
  ↓
production verification
```

Avoid:

* Force pushing shared history
* Committing secrets
* Committing unrelated generated files accidentally
* Large unrelated refactors inside bug fixes
* Mixing multiple independent missions into one change

---

## AI-Assisted Engineering Workflow

StudioDev was developed using an AI-assisted engineering workflow built around:

```text
Boss
  ↓
Jarvis
  ↓
Archon
  ↓
OmniRoute
  ↓
Execution Model
  ↓
Repository
  ↓
Verification
  ↓
Review
```

### Responsibility Model

**Boss**

* Defines product goals
* Makes business decisions
* Approves important changes

**Jarvis**

* Architecture
* Planning
* Risk analysis
* Task decomposition
* Execution prompt design
* Result review

**Archon**

* Repository investigation
* Implementation
* Testing
* Verification
* Reporting

**OmniRoute**

* Dynamically routes execution to an available model/provider

---

## AI Context Architecture

Stable project rules should not be repeatedly copied into execution prompts.

The preferred hierarchy is:

```text
CLAUDE.md
├── agent instructions
└── project.md
```

### `CLAUDE.md`

Acts as the primary persistent entry point for AI coding agents.

### `project.md`

Contains stable project-level information such as:

* Architecture
* Project rules
* Product constraints
* Accessibility expectations
* Performance expectations
* Git safety
* Verification philosophy
* Sources of truth

### AI Memory

Used for:

* Historical decisions
* Previous issues
* Sprint context
* Deferred work
* Important long-term reasoning

### Execution Prompt

Contains only:

* Current mission
* Relevant task-specific context
* Scope
* Constraints
* Verification
* Expected report

This prevents unnecessary context duplication and reduces token consumption.

---

## Agent Task Philosophy

AI engineering tasks should follow several core rules.

### One Mission Per Task

Avoid asking an execution agent to solve unrelated problems in one run.

### Evidence Before Modification

Before fixing a suspected bug:

```text
inspect → reproduce → identify cause → modify → verify
```

Do not change production code based only on assumptions.

### Repository Is Implementation Truth

Documentation and memory provide context, but the current repository determines the actual implementation state.

### Verification Is Mandatory

Implementation is incomplete until relevant checks pass.

Depending on the task, verification may include:

* Lint
* Type checking
* Production build
* Unit tests
* Integration tests
* Route validation
* Browser QA
* Responsive QA
* Lighthouse
* Git diff review

---

## Known Intentional Limitations

Some functionality is intentionally disabled or deferred.

### Live Project Links

Disabled across project cards and project pages.

### Resume Distribution

Resume delivery is currently not part of the portfolio workflow.

### View All Projects

Hidden for now.

### Governing Jurisdiction

Not finalized.

### Automated Inquiry Deletion

Not implemented.

### Advanced Contact Abuse Protection

Deferred until justified by production usage.

These should not be treated as accidental missing features.

---

## Future Improvements

Potential future work includes:

* Advanced SEO landing pages
* Structured data
* AEO improvements
* GEO improvements
* Analytics
* Better conversion tracking
* Additional portfolio projects
* Testimonials
* Case studies
* CMS integration
* Automated inquiry retention/deletion
* Advanced rate limiting
* Cloudflare Turnstile
* Monitoring and observability
* Improved deployment automation
* Automated testing
* Client dashboard functionality

Features should only be added when they support actual business or operational goals.

---

## Engineering Principles

The project follows several principles that should remain intact as it evolves.

### Prefer Simplicity

Do not introduce infrastructure that the portfolio does not yet need.

### Avoid Premature Abstraction

Create abstractions when repeated requirements justify them.

### Protect Production Quality

Every implementation should consider:

* Maintainability
* Accessibility
* Performance
* Security
* SEO
* Responsive behavior
* Error handling

### Preserve Decisions

Important product and architectural decisions should be documented rather than left only inside chat history.

### Automate Verification Over Time

As the system grows, rely increasingly on automated tests, CI/CD, monitoring, migrations, and repeatable operational procedures.

---

## Project Status

Current high-level status:

```text
Sprint 1 — Production Readiness              COMPLETE
Sprint 2 — Functional Completeness           COMPLETE
Sprint 3 — QA Hardening / Issue #16          COMPLETE
Sprint 4 — Deployment & Operational Readiness COMPLETE
```

The core portfolio is considered production-ready.

Remaining work primarily consists of optimization, business growth features, deferred hardening, content improvements, SEO/AEO/GEO expansion, and future product decisions.

---

## Maintainer

**Ehthisham Ul Haq**

StudioDev

Freelance Web Developer & Software Engineer

---

## License

This repository contains the source code and intellectual property for the StudioDev portfolio.

Unless a separate license is explicitly added to the repository, the source code should be considered **proprietary / all rights reserved** and should not be copied, redistributed, or reused without permission.

---

## Documentation

For deeper project history, architecture decisions, sprint outcomes, operational procedures, and the AI-assisted development workflow, refer to the project's:

```text
Project Handover Document
```

The handover document should be treated as the primary historical reference, while the repository remains the source of truth for the current implementation.

---

**StudioDev**
Built with a focus on performance, maintainability, professional engineering practices, and long-term growth.
