UJSH hostel website rebuild - design system and architecture decisions

## Design System
- Fonts: Playfair Display (display), Source Sans 3 (body)
- Primary: Dark Teal hsl(170, 100%, 15%) — #004d40
- Secondary: Warm Gold hsl(43, 89%, 38%) — #b8860b
- Background: Soft Mint hsl(150, 33%, 97%)
- Foreground: Deep Teal hsl(165, 28%, 14%)
- Accent: Light Teal hsl(168, 40%, 92%)
- Muted: Light Sage hsl(155, 30%, 93%)

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
