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
      
      <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-3xl">
          <p className="section-label mb-3 sm:mb-4">{kicker}</p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            {headline}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center w-full sm:w-auto"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center w-full sm:w-auto"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
