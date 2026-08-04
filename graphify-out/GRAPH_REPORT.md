# Graph Report - freelancing-portfolio  (2026-08-04)

## Corpus Check
- 34 files · ~140,234 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 149 nodes · 179 edges · 20 communities (16 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `de778ca8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `Container()` - 10 edges
2. `Section()` - 9 edges
3. `Section Components` - 8 edges
4. `cn()` - 7 edges
5. `Feature Map` - 6 edges
6. `Graphify Workflow Integration Guide` - 5 edges
7. `Component Registry` - 5 edges
8. `Layout Components` - 5 edges
9. `Configuration Map` - 5 edges
10. `StudioDev - Portfolio Design Showcase` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Button()` --calls--> `cn()`  [EXTRACTED]
  components/ui/button.tsx → lib/utils.ts
- `Container()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Container.tsx → lib/utils.ts
- `Section()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Section.tsx → lib/utils.ts

## Communities (20 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (14): Container(), Footer(), Header(), navigationItems, Section(), SectionProps, cn(), CTA() (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.1
Nodes (19): 1. Installation & Integration, 2. Updating & Regenerating the Graph, 3. Querying the Graph, 4. Troubleshooting, code:bash (python -m pip install graphifyy), code:bash (python -m graphify antigravity install), code:bash (python -m graphify update .), code:bash (python -m graphify update . --force) (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.1
Nodes (19): Button, Card Components, Component Registry, Container, CTA, FAQ, Footer, Header (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (12): 1. Brand Identity & Visual Language, 2. Web Portfolio (Desktop), 3. Featured Project Visuals, 4. Device Presentation, AI Productivity Assistant, Business Management Dashboard, Core Logo, Design System: Executive Minimalist (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (7): Brand & Style, Colors, Components, Elevation & Depth, Layout & Spacing, Shapes, Typography

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (6): Feature: Core Infrastructure, Feature: Lead Generation, Feature Map, Feature: Portfolio Showcase, Feature: Service Catalog, Feature: Trust & Authority

### Community 6 - "Community 6"
Cohesion: 0.29
Nodes (6): Engineering Roadmap & History, Project Goals, Project Overview, Sprint 1: Core Foundation, Sprint 2: Primary Content & Conversion, Sprint 3: Polish & Intelligence (Current)

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (4): ProjectCard(), ProjectCardProps, Button(), buttonVariants

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (5): Configuration Map, next.config.ts / .next, package.json, tailwind.config.ts, tsconfig.json

### Community 9 - "Community 9"
Cohesion: 0.4
Nodes (3): geistSans, jetbrainsMono, metadata

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (3): ServiceCard(), ServiceCardProps, services

### Community 11 - "Community 11"
Cohesion: 0.4
Nodes (4): code:bash (npm install), code:bash (npm run dev), Getting Started, StudioDev Portfolio

### Community 12 - "Community 12"
Cohesion: 0.4
Nodes (4): ADR-001: Design System - Executive Minimalist, ADR-002: Technical Stack Selection, ADR-003: Layout Architecture, Architecture Decision Records (ADR)

### Community 13 - "Community 13"
Cohesion: 0.5
Nodes (3): Flow: Lead Conversion Journey, Flow: Navigation Path, User Flows

## Knowledge Gaps
- **69 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `geistSans`, `jetbrainsMono` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._