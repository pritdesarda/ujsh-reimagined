

# Header Redesign — Match Original UJSH Layout

## Current vs Target

The current header has: top contact bar → logo + nav in one row.

The reference image shows a **two-row layout**:
- **Row 1 (Top)**: Logo + "United Jain Students Home" title on left, phone & email on right, social icons (Instagram, Facebook, LinkedIn, WhatsApp/Maps) on far right
- **Row 2 (Bottom)**: Full navigation links (Home → Contact) on left, social icons on right

## Changes — `src/components/layout/Header.tsx`

### Row 1 — Brand Bar
- Left: Logo image + "United Jain Students Home" in serif/display font
- Right: Phone icon + number, Mail icon + email (with "Have any question?" label above each, matching the reference)

### Row 2 — Navigation Bar
- Left: All nav links in a horizontal row (HOME, ABOUT, MANAGEMENT TEAM, ADMISSIONS, FACILITIES, NOTICES, GALLERY, CONTACT) — uppercase styling
- Right: Social media icons — Instagram, Facebook, LinkedIn, Google Maps (using lucide icons or inline SVGs for brand icons)

### Social Links
- Instagram: link to hostel's Instagram
- Facebook: link to hostel's Facebook
- LinkedIn: link to hostel's LinkedIn
- Google Maps / WhatsApp: link to location or WhatsApp

### Mobile
- Keep existing hamburger menu behavior, add social icons to mobile menu footer

### Styling
- Remove the current thin top contact bar; merge contact info into Row 1
- Nav row gets a subtle bottom border, slightly smaller text, uppercase letters
- Use `font-display` for the title, `text-sm uppercase tracking-wide` for nav links

