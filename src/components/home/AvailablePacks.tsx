import { Link } from "react-router-dom";

const PRICE_NET = "20 €";
const VAT_HINT = "Excl. VAT · VAT calculated automatically at checkout";

function FastAPIMark() {
  // "Lightning / API engine" feel
  return (
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-border/40 flex items-center justify-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-cyan-300"
      >
        <path
          d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PythonDataMark() {
  // "Database + pipeline" feel
  return (
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-border/40 flex items-center justify-center">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-emerald-300"
      >
        {/* simple database */}
        <path
          d="M12 3c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    </div>
  );
}

export function AvailablePacks() {
  return (
    <section id="packs" className="py-20 sm:py-28 md:py-32 border-t border-border/30 scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16 md:mb-20 animate-fade-up">
          <span className="section-label mb-4 block">PRODUCTS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Available packs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* FastAPI */}
          <div className="card-glass rounded-3xl p-7 sm:p-8 border border-border/40 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
            <div className="flex items-start gap-4 mb-6">
              <FastAPIMark />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  FastAPI Backend Pack #1
                </h3>
                <p className="text-muted-foreground mt-2">
                  Debugging & architecture playbook for FastAPI APIs – with a full debugging
                  blueprint plus 10+ focused recipes for SQLModel, async, logging and structure.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{PRICE_NET}</span>
                <span className="text-sm text-muted-foreground">· one-time</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{VAT_HINT}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/fastapi" className="btn-primary text-center w-full">
                View Pack Page
              </Link>

              <a
                href="https://silentgpt-dev-engine.netlify.app/fastapi/articles/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-center w-full"
              >
                Preview Free Articles →
              </a>
            </div>
          </div>

          {/* Python Data */}
          <div className="card-glass rounded-3xl p-7 sm:p-8 border border-border/40 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}>
            <div className="flex items-start gap-4 mb-6">
              <PythonDataMark />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Python Data Engineering Pack #1
                </h3>
                <p className="text-muted-foreground mt-2">
                  Performance & reliability playbook for pandas and ETL – from chunking big CSVs
                  to structuring robust data pipelines.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{PRICE_NET}</span>
                <span className="text-sm text-muted-foreground">· one-time</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{VAT_HINT}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/python-data" className="btn-primary text-center w-full">
                View Pack Page
              </Link>

              <a
                href="https://silentgpt-dev-engine.netlify.app/python-data/articles/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-center w-full"
              >
                Preview Free Articles →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
