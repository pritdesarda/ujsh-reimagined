UJSH hostel website rebuild - design system and architecture decisions

## Design System
- Fonts: Playfair Display (display), Source Sans 3 (body)
- Primary: Deep Saffron hsl(18, 85%, 46%)
- Secondary: Golden Yellow hsl(45, 90%, 48%)
- Background: Warm Cream hsl(36, 40%, 97%)
- Foreground: Deep Brown hsl(15, 30%, 12%)
- Accent: Soft Peach hsl(30, 60%, 92%)
- Muted: Light Sand hsl(36, 30%, 92%)
- NO teal/green primary — user rejected it

## Architecture
- React + Vite + Tailwind + React Router
- External Supabase (not yet connected)
- Contact form saves to DB (no email)
- Admin panel planned (Phase 4)
- 20+ public pages with Layout wrapper (Header/Footer)

## Key Components
- PageHero: title/subtitle with dark overlay
- MemberCard: reusable across 7 management pages
- SectionWrapper: consistent section spacing
- FacilityCard: linked cards with icons
- Layout: Header + Footer + Outlet

## Contact Info
- Phone: +91 82918 29191
- Email: ujshsion1@gmail.com
- Location: Sion, Mumbai
