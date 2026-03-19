

# UJSH Hostel Website Rebuild

A complete rebuild of www.ujsh.org as a modern, responsive React application with Supabase backend.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + React Router
- **Backend**: External Supabase (Postgres DB, Auth, Storage)
- **Design**: Responsive — equal attention to mobile and desktop
- **Contact form**: Saves to database (no email sending)

---

## Phase 1: Foundation & Layout

### Global Layout
- **Header**: Logo + "United Jain Students Home" branding, phone/email info, social links
- **Navigation**: Responsive navbar with dropdowns for Management Team and Facilities submenus. Hamburger menu on mobile.
- **Footer**: Contact info, quick links, social media icons
- **Mobile**: Bottom-friendly navigation, touch-optimized spacing

### Shared Components
- Page hero banner with title overlay
- Profile/member card component (reused across 7+ pages)
- Section wrapper with consistent spacing

---

## Phase 2: Public Pages (20 pages)

### Home (`/`)
- Hero carousel/banner with hostel imagery
- "Explore Our Hostel" feature cards (Rooms, Mess, Canteen, etc.)
- About section with CTA
- Latest notices preview
- Footer with map/contact

### About (`/about`)
- History and mission of UJSH
- Static content with images

### Management Team Pages (7 pages)
Each renders a list of profile cards from Supabase tables:
- `/trust_list` — Trustee seats
- `/trustee` — Trustees
- `/managing_committee` — Managing committee
- `/life_members` — Life members
- `/patrons` — Patrons
- `/honorable_members` — Honorary members
- `/student_committee` — Student committee

### Facilities (`/facilities` + 6 subpages)
- Overview page with cards linking to subpages
- `/facilities/mess`, `/canteen`, `/gymnasium`, `/library`, `/sports`, `/rooms`
- Each subpage: description + images

### Other Pages
- `/notices` — List of notices from DB, sorted by date
- `/gallery` — Image grid from Supabase Storage, with lightbox
- `/admission_procedure` — Admission info + downloadable form
- `/apply` — Application details (offline process)
- `/student_life` — Descriptive page
- `/faq` — Accordion-style Q&A
- `/contact` — Form (name, email, subject, message) → saves to `contact_submissions` table
- `/developer` — Developer credits page

---

## Phase 3: Supabase Database Setup

### Tables to create:
1. **`notices`** — id, event, content, created_at
2. **`gallery_images`** — id, filename, storage_path, created_at
3. **`carousel_items`** — id, title, subtitle, image_url, sort_order, is_active
4. **`contact_submissions`** — id, name, email, subject, message, created_at
5. **`trustees`** — id, name, position, details
6. **`trustee_seats`** — id, seat_name, occupant_name
7. **`managing_committee_members`** — id, name, role
8. **`life_members`** — id, name, details
9. **`patrons`** — id, name, details
10. **`honorary_members`** — id, name, details
11. **`student_committee_members`** — id, name, role, batch
12. **`user_roles`** — id, user_id, role (admin/user) — for secure admin access

### Storage
- `gallery` bucket for gallery images

### RLS Policies
- Public read on all content tables
- Admin-only write via `has_role()` security definer function
- Contact submissions: insert for anyone, read for admins only

---

## Phase 4: Admin Panel

### Auth
- Supabase email/password authentication
- Role-based access using `user_roles` table (not stored on profiles)

### Admin Pages (protected routes)
- `/admin/login` — Admin login form
- `/admin/dashboard` — Overview with quick stats
- `/admin/notices` — CRUD for notices (create, edit, delete)
- `/admin/gallery` — Upload images to Supabase Storage, manage gallery
- `/admin/contact` — View contact form submissions
- `/admin/carousel` — Manage homepage carousel items

---

## Design Direction
- Clean, modern institutional style matching the current site's tone
- Color scheme: White/cream backgrounds, dark text, accent color from UJSH branding
- Card-based layouts for members and facilities
- Mobile: Full-width cards, collapsible navigation, touch-friendly buttons
- Desktop: Multi-column grids, sidebar navigation where appropriate

