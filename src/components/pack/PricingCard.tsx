import { PrePurchaseDialog } from "@/components/pack/PrePurchaseDialog";

interface PricingCardProps {
  badge: string;
  title: string;

  // Example: "€20"
  price: string;

  // Example: "excl. VAT"
  priceNote?: string;

  // Example: "VAT is calculated and added at checkout by Gumroad based on your location."
  footerNote?: string;

  benefits: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };

  prePurchase?: {
    title?: string;
    headline?: string;
    intro?: string;
    whoFor: string[];
    whoNotFor: string[];
  };
}

function isGumroadUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.includes("gumroad.com");
  } catch {
    return url.includes("gumroad.com");
  }
}

export function PricingCard({
  badge,
  title,
  price,
  priceNote,
  footerNote,
  benefits,
  primaryCta,
  secondaryCta,
  prePurchase,
}: PricingCardProps) {
  const canDialog =
    Boolean(prePurchase?.whoFor?.length) && Boolean(prePurchase?.whoNotFor?.length);

  const primaryIsGumroad = isGumroadUrl(primaryCta.href);
  const secondaryIsGumroad = isGumroadUrl(secondaryCta.href);

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl" />

            <div className="relative card-glass p-6 sm:p-8 md:p-10 glow-box">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4 sm:mb-6">
                {badge}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {title}
              </h2>

              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold gradient-text">
                  {price}
                </span>
                <span className="text-muted-foreground">· one-time</span>
                {priceNote ? (
                  <span className="text-muted-foreground">· {priceNote}</span>
                ) : null}
              </div>

              <p className="text-sm text-muted-foreground mb-4 sm:mb-6">
                Lifetime updates as the engine grows
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                {/* Primary CTA */}
                {primaryIsGumroad && canDialog ? (
                  <PrePurchaseDialog
                    gumroadUrl={primaryCta.href}
                    title={prePurchase!.title}
                    headline={prePurchase!.headline}
                    intro={prePurchase!.intro}
                    whoFor={prePurchase!.whoFor}
                    whoNotFor={prePurchase!.whoNotFor}
                  >
                    <button type="button" className="btn-primary text-center w-full">
                      {primaryCta.label}
                    </button>
                  </PrePurchaseDialog>
                ) : (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center w-full"
                  >
                    {primaryCta.label}
                  </a>
                )}

                {/* Secondary CTA */}
                {secondaryIsGumroad && canDialog ? (
                  <PrePurchaseDialog
                    gumroadUrl={secondaryCta.href}
                    title={prePurchase!.title}
                    headline={prePurchase!.headline}
                    intro={prePurchase!.intro}
                    whoFor={prePurchase!.whoFor}
                    whoNotFor={prePurchase!.whoNotFor}
                  >
                    <button type="button" className="btn-secondary text-center w-full">
                      {secondaryCta.label}
                    </button>
                  </PrePurchaseDialog>
                ) : (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center w-full"
                  >
                    {secondaryCta.label}
                  </a>
                )}

                {/* VAT / checkout disclaimer */}
                {footerNote ? (
                  <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
                    {footerNote}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
