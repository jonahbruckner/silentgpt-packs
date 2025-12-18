import { Layout } from "@/components/layout/Layout";
import { PackHero } from "@/components/pack/PackHero";
import { PricingCard } from "@/components/pack/PricingCard";
import { WhatsInside } from "@/components/pack/WhatsInside";
import { ValueProposition } from "@/components/pack/ValueProposition";
import { FAQ } from "@/components/pack/FAQ";

const GUMROAD_FASTAPI = "https://silentgpt.gumroad.com/l/fastapi-backend-pack-1";
const HUGO_FASTAPI_ARTICLES = "https://silentgpt-dev-engine.netlify.app/fastapi/articles/";

const PRICE_NET = "20 €";
const VAT_HINT_SHORT = "Excl. VAT · VAT calculated automatically at checkout";
const VAT_HINT_LONG =  "VAT is calculated automatically by Gumroad at checkout based on your location.";

const whatsInsideItems = [
  {
    title: "Debugging Blueprint",
    description:
      "A step-by-step guide for analyzing 500s, tracing import/DI issues and separating environment from code problems.",
  },
  {
    title: "Recipes & Playbooks",
    description:
      "Short, focused articles for recurring issues in SQLModel, async background tasks and dependency injection.",
  },
  {
    title: "Architecture Notes",
    description:
      "How to structure routers, services and repositories so your project stays maintainable.",
  },
  {
    title: "Production Focus",
    description:
      "Patterns assume real deployments: Docker, Render, logging, unstable environments – not just toy examples.",
  },
];

const whoIsThisFor = [
  "Backend devs shipping FastAPI APIs to production.",
  "Solo devs or small teams without a dedicated backend architect.",
  "People who want a reusable FastAPI handbook instead of random blog bookmarks.",
];

const whyItsWorthIt = [
  `One fixed session leak or async deadlock can save you more than ${PRICE_NET} in a single evening.`,
  "The patterns are reusable across multiple projects and clients.",
  "You are building your own, growing troubleshooting system – not buying a one-off blog post.",
];

const faqItems = [
  {
    question: "Is this just raw AI-generated content?",
    answer:
      "No. The engine uses LLMs to draft content, but drafts are scored, filtered and structured into a coherent playbook. Low-quality pieces are discarded. The goal is to capture patterns that actually work in real FastAPI backends.",
  },
  {
    question: "In which format do I get the content?",
    answer:
      "You get pure Markdown files. That makes it easy to use them in Git, Obsidian, Notion or your own internal documentation.",
  },
  {
    question: "Do I get updates?",
    answer:
      "Yes. When the engine produces new high-quality FastAPI articles, they're added to the pack. You get lifetime access to updates.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "If you are already building APIs and want a practical debugging system, yes. If you want a from-scratch beginner course, no.",
  },
];

const FastAPIPage = () => {
  return (
    <Layout>
      <PackHero
        kicker="FASTAPI BACKEND PACK #1"
        headline="Stop debugging FastAPI by guessing."
        subheadline="A debugging & architecture playbook for real FastAPI backends – built around a full debugging blueprint plus 10+ focused recipes for SQLModel, async, logging and project structure."
        primaryCta={{
          label: `Get FastAPI Backend Pack #1 · ${PRICE_NET}*`,
          href: GUMROAD_FASTAPI,
        }}
        secondaryCta={{
          label: "Preview Free FastAPI Articles",
          href: HUGO_FASTAPI_ARTICLES,
        }}
        gradient="from-cyan-500 to-blue-500"
      />

      {/* VAT hint for Hero CTA */}
      <div className="container px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
        <p className="text-xs text-muted-foreground">{`* ${VAT_HINT_SHORT}`}</p>
      </div>

      <PricingCard
        badge="Debugging & Architecture Playbook"
        title="What you get:"
        price={PRICE_NET}
        benefits={[
          "Includes the full FastAPI Debugging Blueprint as the core guide.",
          "SQLModel session patterns (sync & async) that prevent leaks and random crashes.",
          "Clean dependency injection and project structure patterns for growing APIs.",
          "Logging & error-handling recipes so you debug from logs, not from the frontend.",
          "All content as Markdown – ready for Git, Obsidian or your internal docs",
        ]}
        primaryCta={{
          label: "Get the pack on Gumroad",
          href: GUMROAD_FASTAPI,
        }}
        secondaryCta={{
          label: "Browse free articles",
          href: HUGO_FASTAPI_ARTICLES,
        }}
        prePurchase={{
          title: "FastAPI Backend Pack #1",
          headline: "Make sure the FastAPI pack is a fit.",
          intro:
            "Production-focused debugging and architecture patterns. Quick fit-check before you buy.",
          whoFor: [
            "You deploy FastAPI to production and need a repeatable debugging process.",
            "You’re fighting 500s, import/config issues, and SQLModel/async edge cases.",
            "You want patterns you can reuse across client projects and internal APIs.",
          ],
          whoNotFor: [
            "You want a beginner FastAPI tutorial from scratch.",
            "You expect a video course instead of Markdown playbooks.",
            "You prefer trial-and-error over structured troubleshooting and logs.",
          ],
          // Footer note inside the modal (if your component supports it)
          footerNote: VAT_HINT_LONG as any,
        }}
      />

      {/* VAT hint for Pricing section (in case PricingCard does not render footerNote) */}
      <div className="container px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <p className="text-xs text-muted-foreground">{VAT_HINT_SHORT}</p>
      </div>

      <WhatsInside items={whatsInsideItems} />

      <ValueProposition
        whoIsThisFor={whoIsThisFor}
        whyItsWorthIt={whyItsWorthIt}
      />

      <FAQ items={faqItems} />
    </Layout>
  );
};

export default FastAPIPage;
