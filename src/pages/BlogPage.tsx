import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { getAllPosts, type BlogPost } from "@/lib/blog";

type Filter = "all" | "fastapi" | "python-data";

function formatPublishedDate(published_at?: string) {
  if (!published_at) return null;
  const t = Date.parse(published_at);
  if (Number.isNaN(t)) return null;

  return new Date(t).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

const BlogPage = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const allPosts = useMemo(() => getAllPosts(), []);
  const fastapiCount = useMemo(
    () => allPosts.filter((p) => p.topic === "fastapi").length,
    [allPosts]
  );
  const pyDataCount = useMemo(
    () => allPosts.filter((p) => p.topic === "python-data").length,
    [allPosts]
  );

  const visiblePosts = useMemo(() => {
    if (filter === "all") return allPosts;
    return allPosts.filter((p) => p.topic === filter);
  }, [allPosts, filter]);

  const filterButtonClass = (active: boolean) =>
    [
      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
      active
        ? "border-white/15 bg-white/10 text-white"
        : "border-white/10 bg-white/5 text-white/70 hover:bg-white/8 hover:text-white",
    ].join(" ");

  const topicBadgeClass = (topic: BlogPost["topic"]) => {
    if (topic === "fastapi") return "bg-cyan-500/10 text-cyan-200 border-cyan-400/20";
    if (topic === "python-data") return "bg-emerald-500/10 text-emerald-200 border-emerald-400/20";
    return "bg-white/10 text-white/70 border-white/15";
  };

  const topicLabel = (topic: BlogPost["topic"]) => {
    if (topic === "fastapi") return "FastAPI";
    if (topic === "python-data") return "Python Data";
    return "Other";
  };

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Deep dives into FastAPI debugging, Python data performance, and practical patterns for production systems."
        canonicalUrl="https://silentgpt-packs.vercel.app/blog"
        ogImage="/og/blog.png"
      />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="text-xs tracking-[0.35em] text-cyan-300/80">BLOG</div>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
              Engineering Insights
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Deep dives into FastAPI debugging, Python data performance, and practical patterns for
              production systems.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl items-center justify-between gap-4 px-1">
            <div className="flex flex-wrap items-center gap-2">
              <button
                className={filterButtonClass(filter === "all")}
                onClick={() => setFilter("all")}
                type="button"
              >
                All <span className="text-white/50">({allPosts.length})</span>
              </button>

              <button
                className={filterButtonClass(filter === "fastapi")}
                onClick={() => setFilter("fastapi")}
                type="button"
              >
                FastAPI <span className="text-white/50">({fastapiCount})</span>
              </button>

              <button
                className={filterButtonClass(filter === "python-data")}
                onClick={() => setFilter("python-data")}
                type="button"
              >
                Python Data <span className="text-white/50">({pyDataCount})</span>
              </button>
            </div>

            <div className="hidden text-sm text-white/50 md:block">
              Showing <span className="text-white/80">{visiblePosts.length}</span> posts
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6">
            {visiblePosts.map((post) => {
              const displayDate = formatPublishedDate(post.published_at);

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                          topicBadgeClass(post.topic),
                        ].join(" ")}
                      >
                        {topicLabel(post.topic)}
                      </span>
                      {displayDate ? (
                        <span className="text-sm text-white/50">{displayDate}</span>
                      ) : null}
                    </div>

                    <div className="text-white/40 transition group-hover:text-white/60">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-white md:text-xl">
                    {post.title}
                  </h2>

                  {post.excerpt ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
                      {post.excerpt}
                    </p>
                  ) : null}

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200/90">
                    Read article
                    <span className="transition group-hover:translate-x-1">→</span>
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
