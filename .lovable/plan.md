

# Color Palette Redesign for UJSH Hostel Website

## Problem
The current saffron/orange (`hsl(24, 80%, 50%)`) and olive green palette feels generic and doesn't reflect UJSH's identity. The original hostel website uses **dark teal (#004d40)** as its signature color -- this matches the logo and conveys the traditional, community-rooted character of a 100+ year old Jain institution.

## New Color Palette

Based on the hostel logo and the original website's design language:

```text
PRIMARY:       Dark Teal  #004d40  → hsl(170, 100%, 15%)
               Trustworthy, institutional, heritage feel

SECONDARY:     Warm Gold  #b8860b  → hsl(43, 89%, 38%)
               Cultural richness, warmth, Jain heritage

BACKGROUND:    Soft Mint  #f5faf8  → hsl(150, 33%, 97%)
               Light, clean, welcoming

FOREGROUND:    Deep Teal  #1a2e2a  → hsl(165, 28%, 14%)
               Strong readability

MUTED BG:      Light Sage #e9f5f1  → hsl(155, 30%, 93%)
               Subtle section differentiation (matches original site)

ACCENT:        Light Teal #e0f2ef  → hsl(168, 40%, 92%)
               Hover states, highlights

CARD:          Near White #f8fcfa  → hsl(150, 30%, 98%)

BORDER:        Soft Green #d4e5de  → hsl(155, 25%, 86%)

DESTRUCTIVE:   Stays red (functional color)
```

## What Changes

### 1. `src/index.css` -- CSS Custom Properties
Update all `:root` and `.dark` HSL values to the new teal-gold palette. This single file controls the entire color system via CSS variables -- all components using `bg-primary`, `text-primary`, `bg-muted`, etc. will automatically update.

### 2. `src/index.css` -- Font Import
Keep Playfair Display + Source Sans 3 (they work well with institutional/heritage aesthetics).

### 3. `src/components/layout/Footer.tsx`
Footer uses `bg-foreground` which will now be deep teal instead of warm dark -- no code change needed, it flows from the variable update.

### 4. `src/pages/Index.tsx`
Hero section uses `bg-foreground` and gradient overlays -- these will naturally shift to the teal tone. CTA section uses `bg-primary` which becomes dark teal. No code changes needed.

### 5. `mem://index.md` -- Update Memory
Record the new color palette so future changes stay consistent.

## Scope
- **1 file edited**: `src/index.css` (CSS variables only)
- **1 memory file updated**: `mem://index.md`
- **0 component files changed** -- the entire site uses CSS variables, so updating the variables propagates everywhere automatically.

## Dark Mode
The dark mode palette will also be updated to complement the teal-gold system with deeper teal backgrounds and brighter teal/gold accents for contrast.

