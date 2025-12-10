import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-label">Engine Overview</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">SilentGPT Dev Engine</span>
                <span className="block text-foreground mt-2">
                  – curated content packs for real backend work.
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              An internal LLM engine that turns real FastAPI and Python data problems into structured, 
              markdown-native guides and packs – so you stop Googling the same issues every week.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/fastapi" className="btn-primary">
                See FastAPI Backend Pack
              </Link>
              <Link to="/python-data" className="btn-secondary">
                See Python Data Engineering Pack
              </Link>
            </div>

            <p className="text-sm text-muted-foreground/80 max-w-md">
              No random AI fluff. Only curated, markdown-native content focused on 
              debugging, performance and real production issues.
            </p>
          </div>

          {/* Visual card mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-full" />
            <div className="relative card-glass p-6 space-y-4 glow-box">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Questions In
                  </span>
                </div>
                <div className="space-y-2 pl-4">
                  {["How to fix 500 errors in FastAPI?", "SQLModel async session patterns", "pandas chunked CSV processing"].map((q, i) => (
                    <div key={i} className="text-sm text-foreground/80 font-mono bg-muted/30 px-3 py-2 rounded-lg">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <span className="text-xs text-muted-foreground">LLM Drafts</span>
                <div className="flex-1 h-px bg-gradient-to-l from-emerald-500/50 to-transparent" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Curated Pack
                  </span>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-border/50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">FastAPI Backend Pack #1</span>
                    <span className="text-sm text-emerald-400 font-mono">29 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
