import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";

const SocialTemplatesPage = () => {
  const linkedInPosts = [
    {
      title: "The 500 Error Post",
      content: `Every FastAPI developer has seen this:

"Internal Server Error"

And then spent 2 hours guessing what went wrong.

Here's my debugging checklist:
1. Enable detailed exception handlers
2. Check your dependency injection chain
3. Validate Pydantic response models
4. Look for sync calls in async functions
5. Add structured logging with request IDs

Stop debugging by guessing.`,
    },
    {
      title: "The Pandas Performance Post",
      content: `Your pandas code is slow.

Not because pandas is slow.
But because you're using it wrong.

Quick wins that gave me 10x speedup:
→ Fix your dtypes (object → category/numeric)
→ Eliminate iterrows() completely
→ Use query() for complex filtering
→ Vectorize everything

Profile first. Then optimize.`,
    },
    {
      title: "The Async Trap Post",
      content: `I made this mistake in every FastAPI project:

Using requests.get() inside async def endpoints.

Result: Blocked event loop. All requests wait.

The fix: httpx with async client.

One line change. 10x throughput improvement.

Async/sync mixing is the silent performance killer.`,
    },
    {
      title: "The CSV Processing Post",
      content: `10GB CSV file. 8GB RAM.

Memory error.

The fix isn't "get more RAM."

It's chunking:

pd.read_csv('huge.csv', chunksize=100000)

Process → aggregate → write.

Works on any machine. Every time.`,
    },
    {
      title: "The Logging Setup Post",
      content: `Most production APIs have terrible logging.

Here's what I add to every FastAPI project:
□ JSON structured logs
□ Request ID middleware
□ Environment-based log levels
□ Silenced noisy libraries

15 minutes setup.
Hours saved debugging.

Good logging is an investment, not overhead.`,
    },
  ];

  const carouselOutlines = [
    {
      title: "5 FastAPI Debugging Steps",
      slides: ["Hook with the problem", "Step 1: Exception handlers", "Step 2: Check dependencies", "Step 3: Validate models", "Step 4: Check async patterns", "Step 5: Add logging", "CTA"],
    },
    {
      title: "Pandas Performance Killers",
      slides: ["Hook: Why is pandas slow?", "Killer 1: Wrong dtypes", "Killer 2: iterrows()", "Killer 3: apply(axis=1)", "Killer 4: No vectorization", "The fix for each", "CTA"],
    },
    {
      title: "Async vs Sync in FastAPI",
      slides: ["The confusion explained", "When to use async def", "When to use def", "The biggest mistake", "The run_in_executor pattern", "Decision tree", "CTA"],
    },
    {
      title: "Processing Huge CSVs",
      slides: ["The memory error", "Why it happens", "The chunking solution", "Aggregation pattern", "Filtering pattern", "dtype optimization", "CTA"],
    },
    {
      title: "FastAPI Logging Done Right",
      slides: ["The problem with default logging", "JSON formatter setup", "Request ID middleware", "Log level configuration", "Silencing noisy libs", "The full config", "CTA"],
    },
  ];

  const fastApiTips = [
    "Use response_model_exclude_unset=True to debug serialization issues",
    "Add X-Request-ID headers to trace requests through your logs",
    "Don't use requests inside async endpoints – use httpx",
    "Depends() can raise exceptions – handle them explicitly",
    "Background tasks don't block the response – use them for emails",
    "Pydantic V2 validators are different – check the migration guide",
    "Use lifespan instead of @app.on_event (deprecated)",
    "Enable SQL echo in dev to see actual queries",
    "Group related endpoints with APIRouter tags",
    "Don't hardcode log levels – use environment variables",
  ];

  const pythonDataTips = [
    "Use df.dtypes first – object columns waste memory",
    "pd.to_numeric(downcast='integer') saves 50%+ memory",
    "query() is faster than boolean indexing for complex filters",
    "iterrows() is 1000x slower than vectorization",
    "Use chunksize for files that don't fit in RAM",
    "Category dtype is perfect for low-cardinality string columns",
    "eval() and query() use numexpr – faster for large dataframes",
    "copy() after slicing to avoid SettingWithCopyWarning",
    "to_parquet() is smaller and faster than to_csv()",
    "Use nrows parameter to test code on large files quickly",
  ];

  return (
    <Layout>
      <SEO 
        title="Social Templates" 
        description="Ready-to-use LinkedIn posts, carousel outlines, and developer tips for FastAPI and Python Data engineering."
        canonicalUrl="https://silentgpt-dev-engine.lovable.app/resources/social-templates"
        ogImage="/og/home.png"
      />
      
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label text-cyan-400 mb-4 block">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Social Templates
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready-to-post LinkedIn content, carousel outlines, and short-form tips. Copy, customize, post.
            </p>
          </div>
          
          {/* LinkedIn Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">LinkedIn Posts</h2>
            <div className="space-y-6">
              {linkedInPosts.map((post, index) => (
                <div key={index} className="card-glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{post.title}</h3>
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono bg-background/50 p-4 rounded-xl border border-border/50">
                    {post.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Outlines */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">LinkedIn Carousel Outlines</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {carouselOutlines.map((carousel, index) => (
                <div key={index} className="card-glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{carousel.title}</h3>
                  <ol className="space-y-2">
                    {carousel.slides.map((slide, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-cyan-400 font-mono">{idx + 1}.</span>
                        {slide}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
          
          {/* FastAPI Tips */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">FastAPI Short-Form Tips</h2>
            <div className="card-glass rounded-2xl p-6">
              <ul className="space-y-3">
                {fastApiTips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-cyan-400">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Python Data Tips */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Python Data Short-Form Tips</h2>
            <div className="card-glass rounded-2xl p-6">
              <ul className="space-y-3">
                {pythonDataTips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex gap-3">
                    <span className="text-emerald-400">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialTemplatesPage;
