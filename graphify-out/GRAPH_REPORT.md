# Graph Report - freelancing-portfolio  (2026-08-09)

## Corpus Check
- 41 files · ~141,884 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 172 nodes · 226 edges · 21 communities (16 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cdb2b141`
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
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `Container()` - 13 edges
2. `Section()` - 12 edges
3. `cn()` - 9 edges
4. `Section Components` - 8 edges
5. `Feature Map` - 7 edges
6. `ErrorState()` - 6 edges
7. `Graphify Workflow Integration Guide` - 5 edges
8. `Component Registry` - 5 edges
9. `Layout Components` - 5 edges
10. `Configuration Map` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Container()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Container.tsx → lib/utils.ts
- `Section()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Section.tsx → lib/utils.ts
- `Button()` --calls--> `cn()`  [EXTRACTED]
  components/ui/button.tsx → lib/utils.ts
- `ErrorState()` --calls--> `cn()`  [EXTRACTED]
  components/ui/error-state.tsx → lib/utils.ts

## Communities (21 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (10): Container(), Section(), SectionProps, cn(), faqs, Button(), buttonVariants, ErrorState() (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.09
Nodes (21): Button, Card Components, ComingSoon, Component Registry, Container, CTA, ErrorState, FAQ (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.1
Nodes (19): 1. Installation & Integration, 2. Updating & Regenerating the Graph, 3. Querying the Graph, 4. Troubleshooting, code:bash (python -m pip install graphifyy), code:bash (python -m graphify antigravity install), code:bash (python -m graphify update .), code:bash (python -m graphify update . --force) (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (12): ServiceCard(), ServiceCardProps, Footer(), Header(), navigationItems, CTA(), FAQ(), Hero() (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (12): 1. Brand Identity & Visual Language, 2. Web Portfolio (Desktop), 3. Featured Project Visuals, 4. Device Presentation, AI Productivity Assistant, Business Management Dashboard, Core Logo, Design System: Executive Minimalist (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.32
Nodes (5): ProjectCard(), ProjectCardProps, Project, projects, Projects()

### Community 6 - "Community 6"
Cohesion: 0.25
Nodes (7): Feature: Core Infrastructure, Feature: Lead Generation, Feature Map, Feature: Portfolio Showcase, Feature: Resilience & Error Handling, Feature: Service Catalog, Feature: Trust & Authority

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (7): Brand & Style, Colors, Components, Elevation & Depth, Layout & Spacing, Shapes, Typography

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (4): geistSans, jetbrainsMono, metadata, CustomCursor()

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (6): Engineering Roadmap & History, Project Goals, Project Overview, Sprint 1: Core Foundation, Sprint 2: Primary Content & Conversion, Sprint 3: Polish & Intelligence (Current)

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): Configuration Map, next.config.ts / .next, package.json, tailwind.config.ts, tsconfig.json

### Community 11 - "Community 11"
Cohesion: 0.4
Nodes (4): code:bash (npm install), code:bash (npm run dev), Getting Started, StudioDev Portfolio

### Community 12 - "Community 12"
Cohesion: 0.4
Nodes (4): ADR-001: Design System - Executive Minimalist, ADR-002: Technical Stack Selection, ADR-003: Layout Architecture, Architecture Decision Records (ADR)

### Community 13 - "Community 13"
Cohesion: 0.4
Nodes (4): Flow: Failure Recovery (404/Missing), Flow: Lead Conversion Journey, Flow: Navigation Path, User Flows

## Knowledge Gaps
- **78 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `geistSans`, `jetbrainsMono` (+73 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Container()` connect `Community 0` to `Community 3`, `Community 5`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _78 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._