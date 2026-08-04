# Configuration Map

This document links technical configuration files to their high-level architectural goals.
Graphify uses this to create `CONFIGURES` and `SUPPORTS` relationships.

## next.config.ts / .next
- **Goal**: Performance & Image Optimization
- **Impact**: Optimizes images served to the `Projects` section to ensure fast LCP (Largest Contentful Paint).
- **Crticial For**: `Projects` -> `ProjectCard`

## tailwind.config.ts
- **Goal**: Visual Consistency & Design System
- **Impact**: Implements the "Executive Minimalist" design system (ADR-001).
- **Configures**: 
  - `colors`: Defines the Indigo primary, deep charcoal surface, and slate text.
  - `fontFamily`: Implements `Geist` and `JetBrains Mono`.
  - `spacing`: Defines the 4px unit and `section-gap`.
- **Supports**: All UI components in `components/`.

## tsconfig.json
- **Goal**: Type Safety & Developer Velocity
- **Impact**: Configures path aliases (e.g., `@/components`) to simplify imports.
- **Supports**: All source files in `app/` and `components/`.

## package.json
- **Goal**: Dependency Management
- **Impact**: Manages the versions of React, Next.js, and Tailwind CSS.
- **Supports**: Entire repository.
