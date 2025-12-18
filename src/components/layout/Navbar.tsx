import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "FastAPI Pack", href: "/fastapi" },
  { label: "Python Data Pack", href: "/python-data" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Free Pack", href: "/free-pack" },
];

function BrandMark() {
  // Simple, crisp SVG mark (no external assets required)
  return (
    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-border/40 flex items-center justify-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-cyan-300"
      >
        {/* spark/engine mark */}
        <path
          d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close the sheet on route change
  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Scroll lock while sheet is open
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <BrandMark />
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

        {/* Right side: only burger on mobile */}
        <div className="flex items-center">
          {/* Mobile menu (Sheet) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[82%] max-w-sm
                bg-background/95 backdrop-blur-xl
                border-l border-border/50
                shadow-2xl
                px-6 py-6
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BrandMark />
                  <div className="text-foreground font-semibold">Menu</div>
                </div>

                <SheetClose asChild>
                  <button
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </SheetClose>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                        location.pathname === item.href
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
