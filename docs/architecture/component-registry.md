# Component Registry

This document provides detailed metadata for every component in the repository. 
Graphify uses this file to enrich nodes with "Purpose", "Responsibilities", and "Complexity".

## Layout Components

### Container
- **Path**: `components/layout/Container.tsx`
- **Purpose**: Standardizes horizontal spacing and maximum width across the site.
- **Responsibilities**:
  - Enforce `max-w-container-max`
  - Provide consistent horizontal `px-gutter`
- **Complexity**: Low
- **Layer**: Code Intelligence

### Section
- **Path**: `components/layout/Section.tsx`
- **Purpose**: Provides a consistent vertical wrapper for page segments.
- **Responsibilities**:
  - Enforce `py-section-gap`
  - Provide optional background and border styling
- **Complexity**: Low
- **Layer**: Code Intelligence

### Header
- **Path**: `components/layout/Header.tsx`
- **Purpose**: Main site navigation and brand identity.
- **Responsibilities**:
  - Display StudioDev logo
  - Provide anchor links to page sections
  - Provide a primary "Book Consultation" CTA
- **Complexity**: Low
- **Layer**: Code Intelligence

### Footer
- **Path**: `components/layout/Footer.tsx`
- **Purpose**: Site-wide footer for links and copyright.
- **Responsibilities**:
  - Navigation links
  - Social/Contact links
  - Copyright information
- **Complexity**: Low
- **Layer**: Code Intelligence

## UI Components

### Button
- **Path**: `components/ui/button.tsx`
- **Purpose**: Standard interactive element for all actions.
- **Responsibilities**:
  - Implement primary and secondary styles
  - Handle hover/active transitions
- **Complexity**: Low
- **Layer**: Code Intelligence

### ErrorState
- **Path**: `components/ui/error-state.tsx`
- **Purpose**: Unified primitive for all non-happy-path UI states.
- **Responsibilities**:
  - Standardize error, not-found, empty, and coming-soon visuals
  - Provide consistent action patterns (Primary/Secondary)
- **Complexity**: Low
- **Layer**: Code Intelligence

### ComingSoon
- **Path**: `components/ui/coming-soon.tsx`
- **Purpose**: Preset wrapper for `ErrorState` to indicate future features.
- **Responsibilities**:
  - Provide standardized "coming soon" copy and iconography
- **Complexity**: Trivial
- **Layer**: Code Intelligence

## Section Components

### Hero
- **Path**: `components/sections/Hero.tsx`
- **Purpose**: First-impression value proposition and primary conversion point.
- **Responsibilities**:
  - Display primary headline and subheadline
  - Trigger "Book Consultation" and "View Work" actions
  - Showcase core value pillars (Performance, Mobile-First, Clean Code)
  - Render the main visual mockup with floating badges
- **Complexity**: Medium
- **Layer**: Code Intelligence

### Projects
- **Path**: `components/sections/Projects.tsx`
- **Purpose**: Portfolio showcase demonstrating professional capabilities.
- **Responsibilities**:
  - Map a list of project data to `ProjectCard` components
  - Provide a "View All Projects" CTA
- **Complexity**: Low
- **Layer**: Code Intelligence

### Services
- **Path**: `components/sections/Services.tsx`
- **Purpose**: Explicitly state the offerings and business value.
- **Responsibilities**:
  - List core services (Web Dev, Custom Apps, AI, Modernization)
  - Map data to `ServiceCard` components
- **Complexity**: Low
- **Layer**: Code Intelligence

### Process
- **Path**: `components/sections/Process.tsx`
- **Purpose**: Build trust by explaining the professional delivery workflow.
- **Responsibilities**:
  - Display the 4-step process: Discover -> Plan -> Build -> Launch
- **Complexity**: Low
- **Layer**: Code Intelligence

### FAQ
- **Path**: `components/sections/FAQ.tsx`
- **Purpose**: Address common client concerns and reduce friction.
- **Responsibilities**:
  - List frequently asked questions and answers
- **Complexity**: Low
- **Layer**: Code Intelligence

### WhyChooseMe
- **Path**: `components/sections/WhyChooseMe.tsx`
- **Purpose**: Differentiate StudioDev from competitors.
- **Responsibilities**:
  - Highlight the "Business-First Approach" and "Modern Development"
- **Complexity**: Low
- **Layer**: Code Intelligence

### CTA
- **Path**: `components/sections/CTA.tsx`
- **Purpose**: Final conversion point at the bottom of the page.
- **Responsibilities**:
  - Provide a high-impact "Let's Build Something Great Together" message
  - Primary CTA to book consultation
- **Complexity**: Low
- **Layer**: Code Intelligence

## Card Components

### ProjectCard
- **Path**: `components/cards/ProjectCard.tsx`
- **Purpose**: Encapsulate a single project's aesthestics and tech stack.
- **Responsibilities**:
  - Display project image and category
  - Show title, description, and tech tags
  - Provide "View Project" and "View Code" links
- **Complexity**: Low
- **Layer**: Code Intelligence

### ServiceCard
- **Path**: `components/cards/ServiceCard.tsx`
- **Purpose**: Visually represent a specific professional service.
- **Responsibilities**:
  - Display service icon
  - Show title and a brief value proposition
- **Complexity**: Low
- **Layer**: Code Intelligence
