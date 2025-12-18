import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Main footer content */}
          <div className="flex flex-col items-center text-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SilentGPT Dev Engine
            </p>
            <p className="text-xs text-muted-foreground/70 max-w-md">
              SilentGPT Dev Engine produces curated content packs for developers using an internal LLM pipeline.
            </p>
          </div>
          
          {/* Resources links */}
          <div className="flex flex-col items-center gap-3 pt-4 sm:pt-6 border-t border-border/30">
            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">Resources</span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <Link 
                to="/blog" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                Blog
              </Link>
              <Link 
                to="/newsletter" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                Newsletter
              </Link>
            </div>
          </div>
          
          {/* Legal links */}
          <div className="flex flex-col items-center gap-3 pt-4 sm:pt-6 border-t border-border/30">
            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">Rechtliches</span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <Link 
                to="/impressum" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                Datenschutz
              </Link>
              <Link 
                to="/haftung" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                Haftung
              </Link>
              <Link 
                to="/agb" 
                className="text-xs sm:text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors py-1"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
