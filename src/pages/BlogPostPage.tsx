import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { ShareBar } from "@/components/shared/ShareBar";
import { getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// pick ONE theme you like (dark):
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const hasValidDate = Boolean(post.date) && !Number.isNaN(Date.parse(post.date));

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://silentgpt-dev-engine.lovable.app/blog/${post.slug}`}
        ogImage="/og/blog.png"
      />

      <article className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-6 sm:mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to blog
          </Link>

          <header className="mb-8 sm:mb-12">
            {hasValidDate && (
              <time className="text-sm text-muted-foreground/60 block mb-3 sm:mb-4">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-base sm:text-lg text-muted-foreground">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children, ...props }) => (
                  <h2 className="mt-10 mb-4 text-2xl font-semibold text-foreground" {...props}>
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground" {...props}>
                    {children}
                  </h3>
                ),
                p: ({ children, ...props }) => (
                  <p className="text-muted-foreground leading-relaxed" {...props}>
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
                  <a className="text-cyan-400 hover:underline" {...props}>
                    {children}
                  </a>
                ),
                code: ({ inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match?.[1] ?? "";

                  // Inline code
                  if (inline) {
                    return (
                      <code
                        className="text-cyan-300 bg-background/50 border border-border/40 px-1.5 py-0.5 rounded"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  // Code block
                  return (
                    <div className="my-6 rounded-2xl overflow-hidden border border-border/50 bg-background/40">
                      <div className="px-4 py-2 text-xs text-muted-foreground border-b border-border/50 flex items-center justify-between">
                        <span>{language ? language.toUpperCase() : "CODE"}</span>
                      </div>
                      <SyntaxHighlighter
                        language={language || "text"}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          background: "transparent",
                          padding: "16px",
                        }}
                        codeTagProps={{
                          style: {
                            fontSize: "0.9rem",
                            lineHeight: "1.5",
                          },
                        }}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  );
                },
                blockquote: ({ children, ...props }) => (
                  <blockquote
                    className="border-l-2 border-cyan-400/60 bg-background/30 px-4 py-3 rounded-r-2xl text-muted-foreground"
                    {...props}
                  >
                    {children}
                  </blockquote>
                ),
                table: ({ children, ...props }) => (
                  <div className="my-6 overflow-x-auto rounded-2xl border border-border/50">
                    <table className="w-full text-sm" {...props}>
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children, ...props }) => (
                  <th className="text-left bg-background/40 text-foreground px-3 py-2 border-b border-border/50" {...props}>
                    {children}
                  </th>
                ),
                td: ({ children, ...props }) => (
                  <td className="text-muted-foreground px-3 py-2 border-b border-border/30" {...props}>
                    {children}
                  </td>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <ShareBar title={post.title} url={`/blog/${post.slug}`} />

          {/* CTAs */}
          <div className="mt-10 pt-8 border-t border-border/30">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://silentgpt.gumroad.com/l/fastapi-backend-pack-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center w-full sm:w-auto"
              >
                FastAPI Pack · 29 €
              </a>
              <a
                href="https://silentgpt.gumroad.com/l/python-data-engineering-pack-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center w-full sm:w-auto"
              >
                Python Data Pack · 29 €
              </a>
              <Link to="/newsletter" className="btn-ghost text-center w-full sm:w-auto">
                Join the newsletter
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
