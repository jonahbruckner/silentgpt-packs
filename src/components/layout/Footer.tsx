import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-sm text-muted-foreground">
                © {currentYear} SilentGPT Dev Engine
              </p>
              <p className="text-xs text-muted-foreground/70">
                Auto-generated, curated content packs for developers.
              </p>
            </div>
            <p className="text-xs text-muted-foreground/50">
              Powered by an internal LLM Engine.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 pt-4 border-t border-border/30">
            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">Rechtliches</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link 
                to="/impressum" 
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                Datenschutzerklärung
              </Link>
              <Link 
                to="/haftung" 
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                Haftungshinweis
              </Link>
              <Link 
                to="/agb" 
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
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
