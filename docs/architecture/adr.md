# Architecture Decision Records (ADR)

This document records the *Why* behind architectural and design choices.
Graphify uses this to create `EXPLAINED_BY` and `DECIDED_BY` relationships.

## ADR-001: Design System - Executive Minimalist
- **Status**: Approved
- **Decision**: Adopt a "Modern SaaS Minimalism" aesthetic influenced by Linear and Vercel.
- **Rationale**: To signal professional, high-end technical craftsmanship to small business owners. It prioritizes content via negative space, masterful typography (Geist), and subtle monochromatic layering.
- **Impact**:
  - Uses a deep charcoal background (`#0B1326`) to avoid the harshness of pure black.
  - Employs "Tonal Layering" (surface colors) instead of shadows for depth.
  - Strict 4px base unit for all spacing.
- **Relates to**: `Surgical Indigo` accent color, `Geist` font, `JetBrains Mono` for labels.

## ADR-002: Technical Stack Selection
- **Status**: Approved
- **Decision**: Use Next.js, TypeScript, and Tailwind CSS.
- **Rationale**: 
  - **Next.js**: Provides optimal performance, SEO (via SSR/SSG), and excellent developer experience.
  - **TypeScript**: Ensures type safety and maintainability as the project grows.
  - **Tailwind CSS**: Allows for rapid UI development and a consistent design system through utility classes.
- **Impact**: High performance, fast page loads, and consistent styling across components.

## ADR-003: Layout Architecture
- **Status**: Approved
- **Decision**: Implement a "Fixed-Width Centered Grid" with `Container` and `Section` primitives.
- **Rationale**: Creates a premium "editorial" feel on desktop while maintaining fluidity on mobile.
- **Impact**: Every page segment is wrapped in a `Section` and `Container`, ensuring a consistent vertical rhythm (`py-section-gap`).
