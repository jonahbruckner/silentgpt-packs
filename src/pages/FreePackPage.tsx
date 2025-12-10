import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

const FreePackPage = () => {
  const checklist = [
    "Environment mismatch",
    "SQLModel session issues",
    "Misconfigured dependencies",
    "Logging blind spots",
    "Async traps",
  ];

  return (
    <Layout>
      <SEO 
        title="Free FastAPI Debugging Cheatsheet" 
        description="A compact 2-page reference with the most common FastAPI production issues and how to fix them quickly."
        canonicalUrl="https://silentgpt-dev-engine.lovable.app/free-pack"
        ogImage="/og/fastapi.png"
      />
      
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="section-label text-emerald-400 mb-4 block">Free Resource</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Free FastAPI Debugging Cheatsheet
            </h1>
            <p className="text-lg text-muted-foreground">
              A compact 2-page reference with the most common FastAPI production issues and how to fix them quickly.
            </p>
          </div>
          
          <div className="gradient-border rounded-3xl p-8 md:p-10 mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              What's covered:
            </h2>
            <ul className="space-y-4 mb-8">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/free-pack.pdf"
                download
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Want the full debugging playbook with 10+ in-depth articles?
            </p>
            <a
              href="https://silentgpt.gumroad.com/l/fastapi-backend-pack-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get FastAPI Backend Pack #1 · 29 €
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreePackPage;
