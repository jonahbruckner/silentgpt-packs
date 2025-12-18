import { Link } from "react-router-dom";

export function FreePackTeaser() {
  return (
    <section className="py-20 sm:py-24 md:py-32 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="gradient-border rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center glow-box animate-fade-up">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full mb-3 sm:mb-4">
            Free Resource
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Get the free FastAPI Cheatsheet
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
            A compact 2-page reference with the most common FastAPI production issues and how to fix them quickly.
          </p>
          <Link to="/free-pack" className="btn-primary w-full sm:w-auto">
            Download free PDF →
          </Link>
        </div>
      </div>
    </section>
  );
}
