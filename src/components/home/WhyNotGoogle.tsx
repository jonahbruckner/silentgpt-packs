const reasons = [
  {
    title: "Structured",
    description: "Not scattered blog posts. Organized by topic with clear progression.",
  },
  {
    title: "Curated",
    description: "Every article passed quality checks. No outdated or generic content.",
  },
  {
    title: "Markdown-native",
    description: "Drop files into Git, Obsidian, or Notion. Your knowledge base, your way.",
  },
  {
    title: "Growing",
    description: "Updated as the engine produces new high-quality articles.",
  },
];

export function WhyNotGoogle() {
  return (
    <section className="py-20 sm:py-24 md:py-32 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="section-label mb-4">Value</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5 sm:mb-6">
            Why not just Google it?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-14 leading-relaxed">
            Because scattered search results don't build a knowledge base. 
            These packs do.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="text-center p-4 sm:p-6 opacity-0 animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.08}s`, animationFillMode: 'forwards' }}>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
