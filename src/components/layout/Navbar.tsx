import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "FastAPI Pack", href: "/fastapi" },
  { label: "Python Data Pack", href: "/python-data" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500" />
          <span className="text-lg font-semibold text-foreground">
            SilentGPT Dev Engine
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "nav-link",
                location.pathname === item.href && "active"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://silentgpt.gumroad.com/l/fastapi-backend-pack-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden sm:inline-flex"
        >
          Get the packs
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
