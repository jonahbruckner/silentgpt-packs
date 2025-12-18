import { Link } from "react-router-dom";
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

function isInternalUrl(url: string) {
  return url.startsWith("/");
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

// Parse CTA label to separate name and price for better mobile layout
function parseCtaLabel(label: string) {
  const parts = label.split(" · ");
  if (parts.length === 2) {
    return { name: parts[0], price: parts[1] };
  }
  return { name: label, price: null };
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

  const parsedPrimaryCta = parseCtaLabel(primaryCta.label);

  // Button content with mobile-optimized layout
  const PrimaryButtonContent = () => (
    <>
      {/* Desktop: single line with separator */}
      <span className="hidden sm:inline whitespace-nowrap">
        {primaryCta.label}
      </span>
      {/* Mobile: stacked layout */}
      <span className="flex sm:hidden flex-col items-center justify-center gap-0.5">
        <span className="text-center leading-tight">{parsedPrimaryCta.name}</span>
        {parsedPrimaryCta.price && (
          <span className="text-xs opacity-90">{parsedPrimaryCta.price}</span>
        )}
      </span>
    </>
  );

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
                <button type="button" className="btn-primary px-6 sm:px-8 py-4 text-base sm:text-lg h-auto min-h-[3.5rem]">
                  <PrimaryButtonContent />
                </button>
              </PrePurchaseDialog>
            ) : (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 sm:px-8 py-4 text-base sm:text-lg h-auto min-h-[3.5rem]"
              >
                <PrimaryButtonContent />
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
            ) : isInternalUrl(secondaryCta.href) ? (
              <Link
                to={secondaryCta.href}
                className="btn-secondary px-8 py-4 text-lg"
              >
                {secondaryCta.label}
              </Link>
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
