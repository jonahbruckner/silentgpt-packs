interface PackHeroProps {
  kicker: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  gradient: string;
}

export function PackHero({
  kicker,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  gradient,
}: PackHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-5`} />
      
      <div className="container py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <p className="section-label mb-4">{kicker}</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {headline}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
