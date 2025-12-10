export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container py-12">
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
      </div>
    </footer>
  );
}
