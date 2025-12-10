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
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Value</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why not just Google it?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Because scattered search results don't build a knowledge base. 
            These packs do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
