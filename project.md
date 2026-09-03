# StudioDev Project Context

## Product
- Brand: StudioDev
- Portfolio for international freelance software/web development work.
- Design direction: Executive Minimalist.
- Dark, premium, restrained, high-trust technical aesthetic.
- Mobile, tablet, and desktop must form one responsive design system.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Resend
- next/font
- Git/GitHub

## Repository Architecture
- app/
- components/layout/
- components/sections/
- components/cards/
- components/ui/
- lib/
- graphify-out/

## Current Projects
- Chit-Chat
- AI Productivity Assistant
- Business Dashboard

Movie Ticket Booking was intentionally removed and must not be restored.

## Product Constraints
- Live-project visit functionality is currently disabled across the portfolio.
- Do not render View Project / View Live Project / Live Demo / Visit Site CTAs.
- Preserve underlying liveUrl data if present for future use.
- Resume functionality is deferred and must not be restored.
- Contact experience is active.
- Privacy Policy and Terms exist.

## Icon / Font Rules
- Use Lucide React for icons.
- Do not reintroduce Material Symbols.
- Do not add Google-hosted icon fonts.
- Preserve existing Next.js font architecture.
- Material Symbols were removed because they caused mobile Lighthouse instability.

## Responsive Design Rules
Mobile: <768px
Tablet: 768–1023px
Desktop: >=1024px

Principles:
- mobile is intentionally designed, not desktop squeezed
- tablet is an intermediate composition
- desktop retains full premium layout
- avoid duplicate responsive renderings
- internal horizontal scrolling is allowed only where intentional
- page-level horizontal overflow is a defect

## Accessibility
- semantic HTML
- heading hierarchy
- keyboard access
- visible focus
- accessible menu/control labels
- FAQ disclosure semantics
- sufficient touch targets
- decorative icons hidden appropriately

## Performance
Targets: Performance >=90, Accessibility >=95, Best Practices >=95, SEO >=95
Rules:
- avoid unnecessary runtime dependencies
- avoid external render-blocking font/icon dependencies
- prefer native CSS/browser behavior where practical
- do not optimize speculatively; use evidence

## SEO
- route-specific canonical metadata
- existing Open Graph/Twitter metadata
- robots/sitemap architecture
- NEXT_PUBLIC_SITE_URL-based URL generation where currently implemented

## Git Safety
- inspect git status before modifying
- never overwrite unexpected user work
- do not use git reset --hard unless explicitly authorized
- do not use git add . for bounded tasks
- do not commit or push unless explicitly instructed
- keep commits focused

## Graphify
graphify-out/ is generated project-intelligence infrastructure.
Do not manually edit/revert/stage/commit Graphify output unless explicitly instructed.

## Verification Philosophy
- evidence before modification
- reproduce suspected defects before fixing them
- do not change something merely because it "could be better"
- bounded mission per task
- stop after requested verification/report
- report optional improvements as observations, not defects

## Source of Truth
1. current repository source
2. project.md stable rules
3. relevant Archon memories
4. current execution prompt

## Archon Memory
Long-term context/history is stored at: D:\sham\Archon\memories
Use only relevant memory files for the current task.

## Next.js Rule
Framework-specific Next.js execution guidance remains in agent.md.
