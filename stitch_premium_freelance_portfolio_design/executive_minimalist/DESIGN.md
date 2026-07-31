---
name: Executive Minimalist
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#c4c7c9'
  on-secondary: '#2d3133'
  secondary-container: '#464a4b'
  on-secondary-container: '#b6b9bb'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8392a6'
  on-tertiary-container: '#1c2b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality is rooted in high-end technical craftsmanship, blending the precision of software engineering with the approachability of a strategic partner. It is designed to evoke a sense of calm reliability, absolute clarity, and enterprise-grade quality. 

The aesthetic draws heavily from **Modern SaaS Minimalism**, specifically influenced by the "Linear" and "Vercel" schools of design. It prioritizes content through significant negative space, masterful typography, and subtle monochromatic layering. Visual interest is generated through micro-interactions and refined border treatments rather than aggressive colors or shadows. The goal is to signal to small business owners that their digital presence is in the hands of a professional who values detail and functional elegance.

## Colors
The palette is a sophisticated dark-mode first execution. 

- **Primary (Indigo):** Used sparingly as a "surgical" accent for primary calls to action, active states, and critical brand moments. It represents intelligence and modern technology.
- **Neutral (Deep Charcoal/Navy):** The foundation of the UI. Backgrounds use a deep charcoal (#0F172A) to ensure high-contrast readability without the harshness of pure black.
- **Surface & Borders:** Interactive components reside on a slightly lighter surface (#1E293B). Borders are extremely subtle, using semi-transparent whites to create structure without visual noise.
- **Text:** High-tier information uses a crisp "Off-White" (#F8FAFC), while secondary metadata uses a muted slate (#94A3B8) to maintain a clear visual hierarchy.

## Typography
The system utilizes **Geist** for its technical precision and neutral, "developer-first" aesthetic. Its geometric clarity ensures readability at all scales.

- **Headlines:** Use tight letter-spacing and substantial font weights to create an authoritative presence. 
- **Body Text:** Employs generous line heights (1.6) to ensure long-form project descriptions are accessible and professional.
- **Labels:** **JetBrains Mono** is introduced for small labels, tags, and technical metadata. This subtle monospaced touch reinforces the "developer" identity while remaining clean and legible.
- **Hierarchy:** Rely on weight and color (switching from white to slate) rather than drastic size changes to differentiate content tiers.

## Layout & Spacing
The layout follows a **Fixed-Width Centered Grid** for desktop to maintain a premium "editorial" feel, transitioning to a fluid system for mobile devices.

- **Rhythm:** Built on a 4px base unit. All internal component padding and margins should be multiples of 4 (usually 8, 16, 24, 32).
- **Whitespace:** Emphasize "macro-spacing." High-impact sections should be separated by 120px to 160px of vertical space to allow the user's eyes to rest and focus on one value proposition at a time.
- **Grid:** A standard 12-column grid is used for desktop. For project showcases, utilize asymmetrical layouts (e.g., an 8-column wide description paired with a 4-column sidebar of tech specs).

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

1. **The Floor:** The main background is the darkest layer (#0F172A).
2. **The Surface:** Cards and navigation bars sit on a slightly lighter tint (#1E293B).
3. **The Stroke:** Every elevated element is defined by a 1px solid border. Use `rgba(255, 255, 255, 0.08)` for standard containers and `rgba(255, 255, 255, 0.15)` for interactive hover states.
4. **The Glow (Optional):** For primary cards or featured projects, a very subtle, large-radius (64px) ambient glow using the primary indigo color at 5% opacity can be placed behind the element to simulate a soft "backlight."

## Shapes
The shape language is "Soft-Modern." It avoids the playfulness of fully circular pill shapes and the aggression of sharp corners.

- **Standard Elements (Buttons, Inputs):** 8px corner radius.
- **Large Elements (Cards, Modals, Images):** 12px to 16px corner radius.
- **Consistency:** Maintain the relationship between outer and inner radii—if a card has a 12px radius and 16px of padding, the inner content should be 4px or 8px rounded to maintain visual harmony.

## Components
- **Buttons:** 
  - *Primary:* Solid Indigo background, white text, 8px radius. 
  - *Secondary:* Ghost style with 1px border `rgba(255, 255, 255, 0.1)` and subtle white text.
- **Cards:** No shadows. Defined by a 1px border and a background color that is one step lighter than the page background. Hover states should slightly brighten the border color.
- **Input Fields:** Darker than the surface background, 8px radius, subtle 1px border. Focus state changes the border to Primary Indigo and adds a 2px outer ring with 10% opacity.
- **Chips/Tags:** Monospaced (JetBrains Mono) text, small 4px radius, low-contrast background. Used for "Tech Stack" or "Service" indicators.
- **Lists:** Clean dividers using 1px borders. Use "Chevron-right" icons for interactive list items to signify drill-down capability.
- **Project Grid:** Large images with 12px radius, followed by a headline, a short description in Slate, and a row of monospaced tech tags.