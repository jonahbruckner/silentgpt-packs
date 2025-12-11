import { Link } from "react-router-dom";

const packs = [
  {
    title: "FastAPI Backend Pack #1",
    description: "Debugging & architecture playbook for FastAPI APIs – with a full debugging blueprint plus 10+ focused recipes for SQLModel, async, logging and structure.",
    price: "29 €",
    href: "/fastapi",
    freeArticles: "https://silentgpt-dev-engine.netlify.app/fastapi/articles/",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Python Data Engineering Pack #1",
    description: "Performance & reliability playbook for pandas and ETL – from chunking big CSVs to structuring robust data pipelines.",
    price: "29 €",
    href: "/python-data",
    freeArticles: "https://silentgpt-dev-engine.netlify.app/python-data/articles/",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function AvailablePacks() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="section-label mb-3 sm:mb-4">Products</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Available packs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <div
              key={pack.title}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pack.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative card-glass p-6 sm:p-8 h-full flex flex-col glow-box">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pack.gradient} mb-4 sm:mb-6 flex-shrink-0`} />
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {pack.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-1">
                  {pack.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-foreground">{pack.price}</span>
                    <span className="text-sm text-muted-foreground">· one-time</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link to={pack.href} className="btn-primary text-center w-full">
                      View Pack Page
                    </Link>
                    <a
                      href={pack.freeArticles}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-center"
                    >
                      Preview Free Articles →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
