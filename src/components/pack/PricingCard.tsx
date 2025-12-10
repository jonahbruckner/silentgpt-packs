interface PricingCardProps {
  badge: string;
  title: string;
  price: string;
  benefits: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export function PricingCard({
  badge,
  title,
  price,
  benefits,
  primaryCta,
  secondaryCta,
}: PricingCardProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl" />
            
            <div className="relative card-glass p-8 md:p-10 glow-box">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                {badge}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold gradient-text">{price}</span>
                <span className="text-muted-foreground">· one-time</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Lifetime updates as the engine grows
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  {primaryCta.label}
                </a>
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 text-center"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
