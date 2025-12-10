import { Link } from "react-router-dom";

const packs = [
  {
    title: "FastAPI Backend Pack #1",
    description: "A debugging & architecture playbook for real FastAPI projects. Covers 500 errors, SQLModel, async patterns, and production logging.",
    price: "29 €",
    href: "/fastapi",
    freeArticles: "https://silentgpt-dev-engine.netlify.app/fastapi/articles/",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Python Data Engineering Pack #1",
    description: "Performance & reliability playbook for pandas and ETL. Covers chunking, memory optimization, and pipeline structure.",
    price: "29 €",
    href: "/python-data",
    freeArticles: "https://silentgpt-dev-engine.netlify.app/python-data/articles/",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function AvailablePacks() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Available packs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packs.map((pack) => (
            <div
              key={pack.title}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pack.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative card-glass p-8 h-full flex flex-col glow-box">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pack.gradient} mb-6`} />
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pack.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {pack.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{pack.price}</span>
                    <span className="text-sm text-muted-foreground">· one-time</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={pack.href} className="btn-primary flex-1 text-center">
                      View pack page
                    </Link>
                    <a
                      href={pack.freeArticles}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-center"
                    >
                      Preview free articles →
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
