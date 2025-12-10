import { Layout } from "@/components/layout/Layout";
import { PackHero } from "@/components/pack/PackHero";
import { PricingCard } from "@/components/pack/PricingCard";
import { WhatsInside } from "@/components/pack/WhatsInside";
import { ValueProposition } from "@/components/pack/ValueProposition";
import { FAQ } from "@/components/pack/FAQ";

const GUMROAD_PYDATA = "https://silentgpt.gumroad.com/l/python-data-engineering-pack-1";
const HUGO_PYDATA_ARTICLES = "https://silentgpt-dev-engine.netlify.app/python-data/articles/";

const whatsInsideItems = [
  {
    title: "Performance Blueprint",
    description: "The flagship guide covering pandas optimization, memory management, and processing large datasets efficiently.",
  },
  {
    title: "Pandas Recipes",
    description: "Chunked CSV processing, dtype optimization, and patterns for handling data that doesn't fit in memory.",
  },
  {
    title: "ETL Patterns",
    description: "Pipeline structure, data validation, and how to build robust extraction-transform-load workflows.",
  },
  {
    title: "Reliability Focus",
    description: "Testing strategies, logging, and error handling for production data pipelines.",
  },
];

const whoIsThisFor = [
  "Data engineers building ETL pipelines",
  "Analysts working with large CSV files",
  "ML engineers preprocessing datasets",
  "Python devs who need faster data scripts",
];

const whyItsWorthIt = [
  "Stop waiting for slow pandas scripts",
  "Patterns for processing files larger than RAM",
  "Reusable ETL templates you can adapt",
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
    answer: "Yes. When the engine produces new high-quality Python data articles, they're added to the pack. You get lifetime access to updates.",
  },
  {
    question: "Does this cover libraries beyond pandas?",
    answer: "The focus is on pandas and standard library tools for ETL. Future updates may include polars and other libraries as the engine grows.",
  },
];

const PythonDataPage = () => {
  return (
    <Layout>
      <PackHero
        kicker="PYTHON DATA ENGINEERING PACK #1"
        headline="Turn slow, fragile data scripts into solid pipelines."
        subheadline="A performance & reliability playbook for pandas and ETL: a full performance blueprint plus focused articles on chunking, memory, cleaning and pipeline structure."
        primaryCta={{
          label: "Get Python Data Engineering Package",
          href: GUMROAD_PYDATA,
        }}
        secondaryCta={{
          label: "Preview free Python data articles",
          href: HUGO_PYDATA_ARTICLES,
        }}
        gradient="from-emerald-500 to-teal-500"
      />

      <PricingCard
        badge="Performance & Reliability Playbook"
        title="What you get"
        price="29 €"
        benefits={[
          "Python Data Performance Blueprint",
          "Chunked CSV processing patterns",
          "dtype & memory optimization guides",
          "ETL structure and pipeline patterns",
          "Robustness & logging / testing recipes",
        ]}
        primaryCta={{
          label: "Get the pack on Gumroad",
          href: GUMROAD_PYDATA,
        }}
        secondaryCta={{
          label: "Browse free articles",
          href: HUGO_PYDATA_ARTICLES,
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

export default PythonDataPage;
