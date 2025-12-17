import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "FastAPI Pack", href: "/fastapi" },
  { label: "Python Data Pack", href: "/python-data" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Free Pack", href: "/free-pack" },
];

export function Navbar() {
  const location = useLocation();

  // "open" controls the visual state (slide in/out).
  // "mounted" controls whether the overlay exists in the DOM (so we can animate out).
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openMenu = () => {
    setMounted(true);
    // next frame to ensure transition applies
    requestAnimationFrame(() => setOpen(true));
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    if (open || mounted) closeMenu();
    else openMenu();
  };

  // Unmount after the slide-out animation finishes
  useEffect(() => {
    if (!mounted) return;
    if (open) return;

    const t = window.setTimeout(() => setMounted(false), 240);
    return () => window.clearTimeout(t);
  }, [open, mounted]);

  // Scroll lock while mounted (menu open/closing)
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", mounted);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [mounted]);

  // Close on route change (safe UX)
  useEffect(() => {
    if (mounted) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex-shrink-0" />
          <span className="text-base sm:text-lg font-semibold text-foreground truncate">
            SilentGPT Dev Engine
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn("nav-link", location.pathname === item.href && "active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://silentgpt.gumroad.com/l/fastapi-backend-pack-1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex text-sm px-4 py-2.5"
          >
            Get the packs
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay (Backdrop + Sliding Panel) */}
      {mounted && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className={cn(
              "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200",
              open ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Panel */}
          <nav
            className={cn(
              "absolute right-0 top-0 h-full w-[82%] max-w-sm",
              "bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl",
              "px-6 py-6 flex flex-col gap-2",
              "transform transition-transform duration-200 ease-out will-change-transform",
              open ? "translate-x-0" : "translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                  location.pathname === item.href
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-border/50">
              <a
                href="https://silentgpt.gumroad.com/l/fastapi-backend-pack-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
                onClick={closeMenu}
              >
                Get the packs
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
