import { PrePurchaseDialog } from "@/components/pack/PrePurchaseDialog";

interface PackHeroProps {
  kicker: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  gradient: string;

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
    return url.toLowerCase().includes("gumroad.com");
  }
}

// Generic fallback (so the dialog ALWAYS opens for Gumroad even if prePurchase was forgotten)
function fallbackPrePurchase(kicker: string) {
  return {
    title: kicker || "Pack fit-check",
    headline: "Make sure this pack is a fit.",
    intro: "Quick filter before you buy. If it matches, continue to Gumroad.",
    whoFor: [
      "You want a practical, production-oriented playbook (not generic theory).",
      "You prefer repeatable patterns and checklists over trial-and-error.",
      "You want Markdown content you can reuse in docs, notes, or internal wikis.",
    ],
    whoNotFor: [
      "You want a beginner course from scratch.",
      "You expect video lessons instead of written playbooks.",
      "You don’t plan to apply the patterns in real projects.",
    ],
  };
}

export function PackHero({
  kicker,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  gradient,
  prePurchase,
}: PackHeroProps) {
  const primaryIsGumroad = isGumroadUrl(primaryCta.href);
  const secondaryIsGumroad = isGumroadUrl(secondaryCta.href);

  const dialogData =
    prePurchase?.whoFor?.length && prePurchase?.whoNotFor?.length
      ? prePurchase
      : fallbackPrePurchase(kicker);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />

      <div className="container relative">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            {kicker}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {headline}
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            {primaryIsGumroad ? (
              <PrePurchaseDialog
                gumroadUrl={primaryCta.href}
                title={dialogData.title}
                headline={dialogData.headline}
                intro={dialogData.intro}
                whoFor={dialogData.whoFor}
                whoNotFor={dialogData.whoNotFor}
              >
                <button type="button" className="btn-primary px-8 py-4 text-lg">
                  {primaryCta.label}
                </button>
              </PrePurchaseDialog>
            ) : (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg"
              >
                {primaryCta.label}
              </a>
            )}

            {/* Secondary CTA */}
            {secondaryIsGumroad ? (
              <PrePurchaseDialog
                gumroadUrl={secondaryCta.href}
                title={dialogData.title}
                headline={dialogData.headline}
                intro={dialogData.intro}
                whoFor={dialogData.whoFor}
                whoNotFor={dialogData.whoNotFor}
              >
                <button type="button" className="btn-secondary px-8 py-4 text-lg">
                  {secondaryCta.label}
                </button>
              </PrePurchaseDialog>
            ) : (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-lg"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
