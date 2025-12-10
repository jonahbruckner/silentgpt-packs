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
      
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label text-cyan-400 mb-4 block">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engineering Insights
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into FastAPI debugging, Python data performance, and practical patterns for production systems.
            </p>
          </div>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block card-glass rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-3">
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
