import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import hostelLogo from "@/assets/hostel_logo.png";

const managementLinks = [
  { to: "/trust_list", label: "Trust List" },
  { to: "/trustee", label: "Trustees" },
  { to: "/managing_committee", label: "Managing Committee" },
  { to: "/life_members", label: "Life Members" },
  { to: "/patrons", label: "Patrons" },
  { to: "/honorable_members", label: "Honorable Members" },
  { to: "/student_committee", label: "Student Committee" },
];

const facilitiesLinks = [
  { to: "/facilities/mess", label: "Mess" },
  { to: "/facilities/canteen", label: "Canteen" },
  { to: "/facilities/gymnasium", label: "Gymnasium" },
  { to: "/facilities/library", label: "Library" },
  { to: "/facilities/sports", label: "Sports" },
  { to: "/facilities/rooms", label: "Rooms" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { label: "Management Team", children: managementLinks },
  { to: "/admission_procedure", label: "Admissions" },
  { label: "Facilities", children: facilitiesLinks, parentTo: "/facilities" },
  { to: "/notices", label: "Notices" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path?: string) => path && location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      {/* Top bar */}
      <div className="border-b bg-muted/50">
        <div className="container flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:+918291829191" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+91 82918 29191</span>
            </a>
            <a href="mailto:ujshsion1@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">ujshsion1@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="UJSH Logo" className="h-10 w-10" />
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold text-foreground leading-tight">
              United Jain Students Home
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.parentTo || "#"}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                    isActive(item.parentTo) ? "text-primary bg-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-popover border rounded-lg shadow-lg py-1 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-primary ${
                          isActive(child.to) ? "text-primary bg-accent" : "text-popover-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                  isActive(item.to) ? "text-primary bg-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-background animate-fade-in">
          <div className="container py-4 space-y-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to!}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-accent ${
                    isActive(item.to) ? "text-primary bg-accent" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
