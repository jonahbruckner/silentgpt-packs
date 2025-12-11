const steps = [
  {
    number: "01",
    title: "Harvest real questions",
    description: "From issues, production incidents and real projects – not synthetic prompts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Generate LLM drafts",
    description: "The engine uses an LLM to produce multiple draft answers and explanations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Score & filter",
    description: "Drafts are scored, weak ones discarded, strong ones manually reviewed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Bundle into packs",
    description: "The best content is turned into markdown articles and bundled into paid packs and free articles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-radial-bottom">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="section-label mb-3 sm:mb-4">Process</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            How the engine works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative card-glass p-5 sm:p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-primary flex-shrink-0">
                  {step.icon}
                </div>
                <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
              </div>
              
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
