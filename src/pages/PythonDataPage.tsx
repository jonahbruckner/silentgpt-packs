import { Layout } from "@/components/layout/Layout";
import { PackHero } from "@/components/pack/PackHero";
import { PricingCard } from "@/components/pack/PricingCard";
import { WhatsInside } from "@/components/pack/WhatsInside";
import { ValueProposition } from "@/components/pack/ValueProposition";
import { FAQ } from "@/components/pack/FAQ";

const GUMROAD_PYDATA = "https://silentgpt.gumroad.com/l/python-data-engineering-pack-1";

const PRICE_NET = "20 €";
const VAT_HINT_SHORT = "Excl. VAT · VAT calculated automatically at checkout";
const VAT_HINT_LONG =
  "VAT is calculated automatically by Gumroad at checkout based on your location.";

const whatsInsideItems = [
  {
    title: "Performance Blueprint",
    description: "How to profile, measure and optimize Python data scripts without guessing.",
  },
  {
    title: "Pandas Recipes",
    description: "Focused articles on chunking, joins, groupby performance and dtype management.",
  },
  {
    title: "ETL Patterns",
    description: "Examples for structuring ETL scripts so they stay readable and maintainable.",
  },
  {
    title: "Reliability Focus",
    description: "Handling dirty data, logging failures and testing pipelines so they don’t break silently.",
  },
];

const whoIsThisFor = [
  "Data engineers and Python devs maintaining real pipelines.",
  "Analysts/ML engineers moving from notebooks to reproducible scripts.",
  "Anyone processing CSVs that are big enough to hurt.",
];

const whyItsWorthIt = [
  "Fixing one bottleneck or crash can easily save multiple hours.",
  "The patterns are reusable across clients, projects and future pipelines.",
  "You’re building your own internal data-engineering playbook instead of starting from scratch each time.",
];

const faqItems = [
  {
    question: "Do I need big data tools for this?",
    answer:
      "No. This pack is about getting the most out of plain Python and pandas before you need heavy infrastructure.",
  },
  {
    question: "Can I use this with Jupyter notebooks?",
    answer:
      "Yes. The articles are written so you can apply them in notebooks and then move working patterns into scripts and pipelines.",
  },
  {
    question: "Do I get updates?",
    answer:
      "Yes. When the engine produces new high-quality Python data articles, they're added to the pack. You get lifetime access to updates.",
  },
  {
    question: "Will this replace full data-engineering books?",
    answer:
      "No. It’s a focused playbook for concrete, recurring problems – performance, memory, cleaning, ETL structure – not a generic textbook.",
  },
];

const PythonDataPage = () => {
  return (
    <Layout>
      <PackHero
        kicker="PYTHON DATA ENGINEERING PACK #1"
        headline="Turn slow, fragile data scripts into solid pipelines."
        subheadline="A performance & reliability playbook for pandas-based workflows – built around a performance blueprint plus focused articles on chunking, memory, cleaning and ETL structure."
        primaryCta={{
          label: `Get Python Data Engineering Pack #1 · ${PRICE_NET}*`,
          href: GUMROAD_PYDATA,
        }}
        secondaryCta={{
          label: "Preview Free Python Data Engineering Articles",
          href: "/blog?topic=python-data",
        }}
        gradient="from-emerald-500 to-teal-500"
      />

      {/* VAT hint for Hero CTA */}
      <div className="container px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
        <p className="text-xs text-muted-foreground">{`* ${VAT_HINT_SHORT}`}</p>
      </div>

      <PricingCard
        badge="Performance & Reliability Playbook"
        title="What you get:"
        price={PRICE_NET}
        benefits={[
          "Python Data Performance Blueprint to identify CPU, I/O and memory bottlenecks.",
          "Chunked CSV-processing patterns for datasets that don't fit into RAM.",
          "dtype and memory-optimization strategies for realistic pandas workloads.",
          "Clean ETL structure: separate extract, transform and load into testable steps.",
          "Markdown-native content to reuse across projects and data teams.",
        ]}
        primaryCta={{
          label: "Get the pack on Gumroad",
          href: GUMROAD_PYDATA,
        }}
        secondaryCta={{
          label: "Browse free articles",
          href: "/blog?topic=python-data",
        }}
        prePurchase={{
          title: "Python Data Engineering Pack #1",
          headline: "Make sure the data pack is a fit.",
          intro: "ETL, pandas performance, and pipeline reliability. Quick fit-check before you buy.",
          whoFor: [
            "You run ETL jobs and need them faster and more reliable.",
            "You hit pandas performance/memory limits and want repeatable optimization patterns.",
            "You build pipelines end-to-end and want clean extract/transform/load structure.",
          ],
          whoNotFor: [
            "You want a Spark/BigQuery-only course (this is Python + pandas centric).",
            "You only do tiny notebook demos and don’t care about reliability or logging.",
            "You expect a theory-heavy textbook instead of applied recipes.",
          ],
        }}
      />


      <WhatsInside items={whatsInsideItems} />

      <ValueProposition whoIsThisFor={whoIsThisFor} whyItsWorthIt={whyItsWorthIt} />

      <FAQ items={faqItems} />
    </Layout>
  );
};

export default PythonDataPage;
