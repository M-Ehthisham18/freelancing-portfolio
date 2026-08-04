# Feature Map

This document defines the high-level features of the StudioDev portfolio and their owning components.
Graphify uses this to create `FEATURE` and `OWNS` relationships.

## Feature: Lead Generation
**Purpose**: Convert visitors into prospective clients.
- **Owns**: `Hero`
- **Owns**: `CTA`
- **Owns**: `Header` (specifically the Consultation button)
- **Bridges to**: `Contact Flow` (User Journey)

## Feature: Portfolio Showcase
**Purpose**: Provide evidence of technical and design competence.
- **Owns**: `Projects`
- **Owns**: `ProjectCard`
- **Bridges to**: `External Project Links`

## Feature: Service Catalog
**Purpose**: Define the scope of professional offerings.
- **Owns**: `Services`
- **Owns**: `ServiceCard`
- **Bridges to**: `Client Inquiry`

## Feature: Trust & Authority
**Purpose**: Establish professional credibility and reliability.
- **Owns**: `Process`
- **Owns**: `FAQ`
- **Owns**: `WhyChooseMe`
- **Bridges to**: `Client Onboarding`

## Feature: Core Infrastructure
**Purpose**: Provide the visual and structural foundation for the site.
- **Owns**: `Container`
- **Owns**: `Section`
- **Owns**: `Button`
- **Owns**: `Header`
- **Owns**: `Footer`
- **Bridges to**: `Design System`
