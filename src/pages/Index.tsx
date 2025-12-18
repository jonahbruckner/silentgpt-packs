import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AvailablePacks } from "@/components/home/AvailablePacks";
import { WhoIsThisFor } from "@/components/home/WhoIsThisFor";
import { WhyNotGoogle } from "@/components/home/WhyNotGoogle";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="SilentGPT Dev Engine – your private content machine for FastAPI and Python data. Curated developer packs with debugging blueprints and architecture patterns."
        canonicalUrl="https://silentgpt-dev-engine.lovable.app/"
        ogImage="/og/home.png"
      />
      <Hero />
      <HowItWorks />
      <AvailablePacks />
      <WhoIsThisFor />
      <WhyNotGoogle />
      <FeaturedArticles />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
