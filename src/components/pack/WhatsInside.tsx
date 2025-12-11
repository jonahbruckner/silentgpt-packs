interface WhatsInsideProps {
  items: Array<{
    title: string;
    description: string;
  }>;
}

export function WhatsInside({ items }: WhatsInsideProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-radial-bottom">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="section-label mb-3 sm:mb-4">Contents</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            What's inside?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="card-glass p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
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
