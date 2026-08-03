# Graph Report - freelancing-portfolio  (2026-08-04)

## Corpus Check
- 27 files · ~138,395 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 80 nodes · 117 edges · 15 communities (10 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6dd3417f`
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

## God Nodes (most connected - your core abstractions)
1. `Container()` - 10 edges
2. `Section()` - 9 edges
3. `cn()` - 7 edges
4. `StudioDev - Portfolio Design Showcase` - 5 edges
5. `3. Featured Project Visuals` - 4 edges
6. `Button()` - 3 edges
7. `Getting Started` - 3 edges
8. `1. Brand Identity & Visual Language` - 3 edges
9. `2. Web Portfolio (Desktop)` - 3 edges
10. `ProjectCard()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Container()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Container.tsx → lib/utils.ts
- `Section()` --calls--> `cn()`  [EXTRACTED]
  components/layout/Section.tsx → lib/utils.ts
- `Button()` --calls--> `cn()`  [EXTRACTED]
  components/ui/button.tsx → lib/utils.ts

## Communities (15 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (7): Container(), Footer(), CTA(), Hero(), Process(), Technologies(), WhyChooseMe()

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (12): 1. Brand Identity & Visual Language, 2. Web Portfolio (Desktop), 3. Featured Project Visuals, 4. Device Presentation, AI Productivity Assistant, Business Management Dashboard, Core Logo, Design System: Executive Minimalist (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.33
Nodes (6): Section(), SectionProps, cn(), FAQ(), Button(), buttonVariants

### Community 3 - "Community 3"
Cohesion: 0.25
Nodes (7): Brand & Style, Colors, Components, Elevation & Depth, Layout & Spacing, Shapes, Typography

### Community 4 - "Community 4"
Cohesion: 0.4
Nodes (3): geistSans, jetbrainsMono, metadata

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (3): ProjectCard(), ProjectCardProps, projects

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (3): ServiceCard(), ServiceCardProps, services

### Community 7 - "Community 7"
Cohesion: 0.4
Nodes (4): code:bash (npm install), code:bash (npm run dev), Getting Started, StudioDev Portfolio

## Knowledge Gaps
- **28 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `geistSans`, `jetbrainsMono` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 0` to `Community 2`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._