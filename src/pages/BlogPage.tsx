import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  return (
    <Layout>
      <SEO 
        title="Blog" 
        description="FastAPI and Python data engineering articles, tutorials, and debugging guides."
        canonicalUrl="https://silentgpt-dev-engine.lovable.app/blog"
        ogImage="/og/blog.png"
      />
      
      <section className="py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="section-label text-cyan-400 mb-3 sm:mb-4 block">Blog</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Engineering Insights
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into FastAPI debugging, Python data performance, and practical patterns for production systems.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block card-glass rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                      {post.excerpt}
                    </p>
                    <time className="text-xs text-muted-foreground/60">
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center text-cyan-400 text-sm font-medium">
                    Read article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
