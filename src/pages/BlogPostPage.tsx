import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { ShareBar } from "@/components/shared/ShareBar";
import { getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
            <time className="text-sm text-muted-foreground/60 block mb-3 sm:mb-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              {post.excerpt}
            </p>
          </header>
          
          <div 
            className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-semibold
              prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 sm:prose-h2:mt-10 prose-h2:mb-3 sm:prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-code:text-cyan-400 prose-code:bg-background/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-background/50 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:overflow-x-auto
              prose-ul:text-muted-foreground prose-li:text-muted-foreground"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <ShareBar title={post.title} url={`/blog/${post.slug}`} />
          
          {/* CTAs */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/30">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Want more like this?
            </h3>
            <div className="flex flex-col gap-3">
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
              <Link
                to="/newsletter"
                className="btn-ghost text-center"
              >
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
