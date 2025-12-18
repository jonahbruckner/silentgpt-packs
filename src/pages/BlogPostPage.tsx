import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { ShareBar } from "@/components/shared/ShareBar";
import { getPostBySlug, BlogTopic } from "@/lib/blog";
import { cn } from "@/lib/utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function topicLabel(t?: BlogTopic) {
  if (t === "fastapi") return "FastAPI";
  if (t === "python-data") return "Python Data";
  return "Engineering";
}

function topicBadgeClass(t?: BlogTopic) {
  if (t === "fastapi") return "bg-cyan-500/12 text-cyan-300 border-cyan-500/25";
  if (t === "python-data") return "bg-emerald-500/12 text-emerald-300 border-emerald-500/25";
  return "bg-muted/20 text-muted-foreground border-border/40";
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return { words, minutes };
}

// Extract plain text from ReactMarkdown heading children reliably
function nodeToText(node: any): string {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && node.props && node.props.children != null) {
    return nodeToText(node.props.children);
  }
  return "";
}

function buildTocFromMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const seen = new Map<string, number>();
  const toc: TocItem[] = [];

  for (const line of lines) {
    const m2 = line.match(/^##\s+(.+)\s*$/);
    const m3 = line.match(/^###\s+(.+)\s*$/);
    if (!m2 && !m3) continue;

    const raw = (m2?.[1] ?? m3?.[1] ?? "").trim();
    if (!raw) continue;

    const base = slugify(raw);
    const count = (seen.get(base) ?? 0) + 1;
    seen.set(base, count);

    const id = count === 1 ? base : `${base}-${count}`;
    toc.push({ id, text: raw, level: m2 ? 2 : 3 });
  }

  return toc;
}

function stripLeadingTitle(markdown: string) {
  const lines = markdown.split("\n");
  if (lines.length === 0) return markdown;

  // Case 1: "# Title"
  if (/^#\s+/.test(lines[0])) {
    return lines.slice(1).join("\n").trimStart();
  }

  // Case 2: "Title" + "====="
  if (lines.length >= 2 && /^=+$/.test(lines[1].trim())) {
    return lines.slice(2).join("\n").trimStart();
  }

  return markdown;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const articleRef = useRef<HTMLElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!post) return <Navigate to="/blog" replace />;

  const parsedDate = post.published_at
  ? Date.parse(post.published_at)
  : NaN;
  const hasValidDate =
  Boolean(post.published_at) && !Number.isNaN(Date.parse(post.published_at!));
  const dateLabel = hasValidDate
    ? new Date(parsedDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : null;

  const reading = useMemo(() => estimateReadingTime(post.content), [post.content]);

  const contentWithoutTitle = useMemo(() => stripLeadingTitle(post.content), [post.content]);
  const toc = useMemo(() => buildTocFromMarkdown(contentWithoutTitle), [contentWithoutTitle]);

  /**
   * CRITICAL FIX:
   * IDs must be stable across re-renders.
   * Therefore the counter MUST reset every render.
   */
  const renderSeen = new Map<string, number>();
  const idForHeadingInRender = (text: string) => {
    const base = slugify(text);
    const count = (renderSeen.get(base) ?? 0) + 1;
    renderSeen.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;

      setProgress(Math.round(p * 100));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Active section indicator
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2[id], h3[id]")) as HTMLElement[];
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.05, 0.1, 0.2, 0.4, 0.6],
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [post.slug, contentWithoutTitle]);

  // Programmatic scroll for TOC
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    try {
      window.history.replaceState(null, "", `#${id}`);
    } catch {}

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1200);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);

        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(null), 1200);
      } catch {
        // silent
      }
    }
  };

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://silentgpt-packs.vercel.app/blog/${post.slug}`}
        ogImage="/og/blog.png"
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article ref={articleRef as any} className="relative">
        {/* HERO BACKDROP */}
        <div className="absolute inset-x-0 top-0 -z-10">
          <div className="h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%),radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.10),transparent_55%)]" />
          <div className="h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
        </div>

        {/* HERO */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span aria-hidden="true">←</span> Back to blog
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className={cn("inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border", topicBadgeClass(post.topic))}>
                {topicLabel(post.topic)}
              </span>

              {dateLabel ? (
                <span className="text-xs text-muted-foreground/80">{dateLabel}</span>
              ) : (
                <span className="text-xs text-muted-foreground/50">No date</span>
              )}

              <span className="text-xs text-muted-foreground/50">•</span>
              <span className="text-xs text-muted-foreground/80">{reading.minutes} min read</span>
              <span className="text-xs text-muted-foreground/50">•</span>
              <span className="text-xs text-muted-foreground/80">{reading.words.toLocaleString()} words</span>
            </div>

            <h1 className={cn("mt-6 font-bold text-foreground", "text-4xl sm:text-5xl lg:text-6xl", "leading-[1.05]", "max-w-[26ch]", "break-words", "text-balance")}>
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </section>

        {/* BODY */}
        <section className="pb-20 sm:pb-24">
          <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
              {/* CONTENT */}
              <div>
                <div className="card-glass rounded-3xl border border-border/40">
                  <div className="px-6 sm:px-8 py-8 sm:py-10">
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          // prevent duplicate title from markdown
                          h1: () => null,

                          h2: ({ children, ...props }) => {
                            const text = nodeToText(children);
                            const id = idForHeadingInRender(text);
                            return (
                              <h2
                                id={id}
                                className="mt-12 mb-4 text-2xl sm:text-3xl font-semibold text-foreground scroll-mt-28"
                                {...props}
                              >
                                {children}
                              </h2>
                            );
                          },
                          h3: ({ children, ...props }) => {
                            const text = nodeToText(children);
                            const id = idForHeadingInRender(text);
                            return (
                              <h3
                                id={id}
                                className="mt-10 mb-3 text-xl sm:text-2xl font-semibold text-foreground scroll-mt-28"
                                {...props}
                              >
                                {children}
                              </h3>
                            );
                          },
                          p: ({ children, ...props }) => (
                            <p className="text-muted-foreground leading-relaxed text-[1.03rem] sm:text-[1.06rem]" {...props}>
                              {children}
                            </p>
                          ),
                          ul: ({ children, ...props }) => (
                            <ul className="text-muted-foreground leading-relaxed" {...props}>
                              {children}
                            </ul>
                          ),
                          ol: ({ children, ...props }) => (
                            <ol className="text-muted-foreground leading-relaxed" {...props}>
                              {children}
                            </ol>
                          ),
                          a: ({ children, ...props }) => (
                            <a className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-400/60 transition-colors" {...props}>
                              {children}
                            </a>
                          ),
                          blockquote: ({ children, ...props }) => (
                            <blockquote className="my-6 rounded-2xl border border-cyan-500/20 bg-background/20 px-5 py-4 text-muted-foreground" {...props}>
                              {children}
                            </blockquote>
                          ),
                          hr: () => <div className="my-10 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />,
                          code: ({ inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || "");
                            const language = match?.[1] ?? "";

                            if (inline) {
                              return (
                                <code className="text-cyan-200 bg-background/50 border border-border/40 px-1.5 py-0.5 rounded" {...props}>
                                  {children}
                                </code>
                              );
                            }

                            const rawCode = String(children).replace(/\n$/, "");
                            const key = `${post.slug}:${language}:${rawCode.slice(0, 32)}`;

                            return (
                              <div className="my-7 rounded-2xl overflow-hidden border border-border/50 bg-background/35">
                                <div className="px-4 py-2 text-xs text-muted-foreground border-b border-border/50 flex items-center justify-between gap-3">
                                  <span>{language ? language.toUpperCase() : "CODE"}</span>

                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(rawCode, key)}
                                    className={cn(
                                      "inline-flex items-center gap-2 rounded-lg border px-2.5 py-1 text-xs transition-colors",
                                      "border-border/50 bg-background/30 hover:bg-background/50",
                                      copiedKey === key && "border-emerald-500/40 text-emerald-300"
                                    )}
                                    aria-label="Copy code"
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                      <path d="M8 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                      <path d="M6 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    {copiedKey === key ? "Copied" : "Copy"}
                                  </button>
                                </div>

                                <SyntaxHighlighter
                                  language={language || "text"}
                                  style={vscDarkPlus}
                                  customStyle={{ margin: 0, background: "transparent", padding: "16px" }}
                                  codeTagProps={{ style: { fontSize: "0.92rem", lineHeight: "1.55" } }}
                                >
                                  {rawCode}
                                </SyntaxHighlighter>
                              </div>
                            );
                          },
                        }}
                      >
                        {contentWithoutTitle}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <ShareBar title={post.title} url={`/blog/${post.slug}`} />
                </div>
              </div>

              {/* TOC (Desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="rounded-3xl border border-border/40 bg-background/30 backdrop-blur-xl p-6">
                    <div className="text-sm font-semibold text-foreground mb-4">On this page</div>

                    {toc.length ? (
                      <nav className="space-y-1.5">
                        {toc.map((item) => {
                          const isActive = item.id === activeId;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => scrollToId(item.id)}
                              className={cn(
                                "w-full text-left rounded-lg px-2 py-1.5 text-sm transition-colors",
                                "text-muted-foreground hover:text-foreground hover:bg-background/35",
                                item.level === 3 && "pl-5 text-[0.92rem]",
                                isActive && "text-foreground bg-background/45 border border-border/40"
                              )}
                            >
                              <span className="inline-flex items-center gap-2">
                                <span className={cn("h-1.5 w-1.5 rounded-full bg-muted-foreground/40", isActive && "bg-cyan-300")} aria-hidden="true" />
                                {item.text}
                              </span>
                            </button>
                          );
                        })}
                      </nav>
                    ) : (
                      <div className="text-sm text-muted-foreground">No sections detected (use ## / ### headings).</div>
                    )}

                    <div className="mt-6 pt-5 border-t border-border/30">
                      <div className="text-xs text-muted-foreground/70">Tip: Use the TOC to scan sections faster.</div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
