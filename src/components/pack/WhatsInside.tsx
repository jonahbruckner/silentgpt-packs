interface WhatsInsideProps {
  items: Array<{
    title: string;
    description: string;
  }>;
}

export function WhatsInside({ items }: WhatsInsideProps) {
  return (
    <section className="py-24 bg-radial-bottom">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Contents</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What's inside?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="card-glass p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
