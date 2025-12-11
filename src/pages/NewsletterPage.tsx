import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const NewsletterPage = () => {
  return (
    <Layout>
      <SEO 
        title="Newsletter" 
        description="Weekly FastAPI & Python Data insights, patterns, debugging notes, and performance tips. No spam."
        canonicalUrl="https://silentgpt-dev-engine.lovable.app/newsletter"
        ogImage="/og/home.png"
      />
      
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="section-label text-cyan-400 mb-3 sm:mb-4 block">Newsletter</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              SilentGPT Engineering Briefing
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Weekly FastAPI & Python Data insights, patterns, debugging notes, and performance tips. No spam.
            </p>
          </div>
          
          <div className="card-glass p-6 sm:p-8 rounded-2xl">
            <NewsletterForm />
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm text-muted-foreground/70">
              Join 500+ developers receiving weekly patterns and debugging insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 text-sm text-muted-foreground/50">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No spam
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
