import { Layout } from "@/components/layout/Layout";
import { PackHero } from "@/components/pack/PackHero";
import { PricingCard } from "@/components/pack/PricingCard";
import { WhatsInside } from "@/components/pack/WhatsInside";
import { ValueProposition } from "@/components/pack/ValueProposition";
import { FAQ } from "@/components/pack/FAQ";

const GUMROAD_URL = "https://silentgpt.gumroad.com/l/fastapi-backend-pack-1";
const FREE_ARTICLES_URL = "https://silentgpt-dev-engine.netlify.app/fastapi/articles/";

const whatsInsideItems = [
  {
    title: "Debugging Blueprint",
    description: "The flagship guide covering 500 errors, tracebacks, and systematic debugging approaches for FastAPI.",
  },
  {
    title: "Recipes & Playbooks",
    description: "10+ focused articles on SQLModel sessions, async patterns, and common pitfalls.",
  },
  {
    title: "Architecture Notes",
    description: "DI patterns, project structure, and how to organize growing FastAPI codebases.",
  },
  {
    title: "Production Focus",
    description: "Logging, error handling, and patterns for real deployments, not toy examples.",
  },
];

const whoIsThisFor = [
  "Backend devs building APIs with FastAPI",
  "Solo developers or small teams",
  "Anyone tired of debugging by trial and error",
  "Devs who want reusable reference material",
];

const whyItsWorthIt = [
  "Hours of debugging time saved",
  "Reusable patterns you can copy into projects",
  "Markdown files for your personal knowledge base",
  "Lifetime updates as the engine grows",
];

const faqItems = [
  {
    question: "Is this just AI-generated content?",
    answer: "Content is LLM-assisted but curated and structured by hand. Every article passes quality checks before inclusion. No random AI fluff.",
  },
  {
    question: "In which format do I get the content?",
    answer: "Pure Markdown files. Drop them into Git, Obsidian, Notion, or any markdown-compatible tool. No vendor lock-in.",
  },
  {
    question: "Do I get updates?",
    answer: "Yes. When the engine produces new high-quality FastAPI articles, they're added to the pack. You get lifetime access to updates.",
  },
  {
    question: "Is this suitable for beginners?",
    answer: "The pack assumes basic FastAPI knowledge. It's focused on debugging and production patterns, not intro tutorials.",
  },
];

const FastAPIPage = () => {
  return (
    <Layout>
      <PackHero
        kicker="FASTAPI BACKEND PACK #1"
        headline="Stop debugging FastAPI by guessing."
        subheadline="A debugging & architecture playbook for real FastAPI projects – from 500 errors and SQLModel issues to async traps and production logging."
        primaryCta={{
          label: "Get FastAPI Backend Pack #1 · 29 €",
          href: GUMROAD_URL,
        }}
        secondaryCta={{
          label: "Preview free FastAPI articles",
          href: FREE_ARTICLES_URL,
        }}
        gradient="from-cyan-500 to-blue-500"
      />

      <PricingCard
        badge="Debugging & Architecture Playbook"
        title="What you get"
        price="29 €"
        benefits={[
          "The Debugging Blueprint as core reference",
          "SQLModel session patterns (sync & async)",
          "DI and project structure patterns",
          "Logging & error-handling recipes",
          "Markdown files ready for Git / Obsidian / Notion",
        ]}
        primaryCta={{
          label: "Get the pack on Gumroad",
          href: GUMROAD_URL,
        }}
        secondaryCta={{
          label: "Browse free articles",
          href: FREE_ARTICLES_URL,
        }}
      />

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
