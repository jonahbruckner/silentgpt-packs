import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { cn } from "@/lib/utils";
import { getAllPosts, BlogTopic } from "@/lib/blog";

const BlogPage = () => {
  const [filter, setFilter] = useState<"all" | BlogTopic>("all");

  const posts = useMemo(() => getAllPosts(), []);

  const counts = useMemo(() => {
    const fastapi = posts.filter((p) => p.topic === "fastapi").length;
    const pydata = posts.filter((p) => p.topic === "python-data").length;
    return { all: posts.length, fastapi, pydata };
  }, [posts]);

  const filtered = useMemo(() => {
    if (filter === "all") return posts;
    return posts.filter((p) => p.topic === filter);
  }, [posts, filter]);

  const topicLabel = (t: BlogTopic) =>
    t === "fastapi" ? "FastAPI" : t === "python-data" ? "Python Data" : "Other";

  const topicBadgeClasses = (t: BlogTopic) => {
    if (t === "fastapi") return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
    if (t === "python-data") return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
    return "bg-muted/20 text-muted-foreground border-border/40";
  };

  const safeDate = (dateStr: string) => {
    const t = Date.parse(dateStr);
    if (Number.isNaN(t)) return null;
    return new Date(t).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <Layout>
      <SEO
        title="Blog"
        description="FastAPI debugging, Python data engineering, ETL and performance patterns for production systems."
        canonicalUrl="https://silentgpt-packs.vercel.app/blog"
        ogImage="/og/blog.png"
      />

      <section className="py-24 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <span className="section-label text-cyan-400 mb-4 block">BLOG</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Engineering Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep dives into FastAPI debugging, Python data performance, and practical patterns for production systems.
            </p>
          </div>

          {/* FILTER BAR */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="inline-flex w-full sm:w-auto rounded-2xl border border-border/50 bg-background/40 backdrop-blur-xl p-1">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={cn(
                  "flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
                  filter === "all"
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                All <span className="text-muted-foreground font-medium">({counts.all})</span>
              </button>

              <button
                type="button"
                onClick={() => setFilter("fastapi")}
                className={cn(
                  "flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
                  filter === "fastapi"
                    ? "bg-cyan-500/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                FastAPI{" "}
                <span className="text-muted-foreground font-medium">
                  ({counts.fastapi})
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilter("python-data")}
                className={cn(
                  "flex-1 sm:flex-none px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
                  filter === "python-data"
                    ? "bg-emerald-500/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Python Data{" "}
                <span className="text-muted-foreground font-medium">
                  ({counts.pydata})
                </span>
              </button>
            </div>

            <div className="text-sm text-muted-foreground text-center sm:text-right">
              Showing{" "}
              <span className="text-foreground font-semibold">{filtered.length}</span>{" "}
              posts
            </div>
          </div>

          {/* POSTS */}
          <div className="space-y-5">
            {filtered.map((post) => {
              const date = safeDate(post.date);

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block card-glass rounded-3xl p-6 sm:p-7 border border-border/40 hover:border-border/70 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border",
                        topicBadgeClasses(post.topic)
                      )}
                    >
                      {topicLabel(post.topic)}
                    </div>

                    {date ? (
                      <span className="text-xs text-muted-foreground">{date}</span>
                    ) : (
                      <span className="text-xs text-muted-foreground/60">No date</span>
                    )}
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
                    {post.title}
                  </h2>

                  {post.excerpt ? (
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  ) : null}

                  <div relating="read" className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
