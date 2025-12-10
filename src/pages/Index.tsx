import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AvailablePacks } from "@/components/home/AvailablePacks";
import { WhoIsThisFor } from "@/components/home/WhoIsThisFor";
import { WhyNotGoogle } from "@/components/home/WhyNotGoogle";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <AvailablePacks />
      <WhoIsThisFor />
      <WhyNotGoogle />
    </Layout>
  );
};

export default Index;
