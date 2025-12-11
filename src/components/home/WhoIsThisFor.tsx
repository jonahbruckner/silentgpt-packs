const audiences = [
  {
    title: "Backend Developers",
    items: [
      "Building APIs with FastAPI or similar frameworks",
      "Debugging async issues and database sessions",
      "Need production-ready patterns, not tutorials",
      "Want reusable reference material for their team",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Data Engineers & Python Devs",
    items: [
      "Working with large CSV files and pandas",
      "Building ETL pipelines that need to scale",
      "Tired of slow, memory-hungry scripts",
      "Want patterns for robust data workflows",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
];

export function WhoIsThisFor() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-radial-gradient">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="section-label mb-3 sm:mb-4">Audience</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Who this is for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {audiences.map((audience) => (
            <div key={audience.title} className="card-glass p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-primary flex-shrink-0">
                  {audience.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {audience.title}
                </h3>
              </div>

              <ul className="space-y-2 sm:space-y-3">
                {audience.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
