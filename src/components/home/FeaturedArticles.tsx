import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";

export function FeaturedArticles() {
  const featured = getAllPosts().slice(0, 3);

  return (
    <section className="py-14 sm:py-20 md:py-28 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-label text-cyan-400 mb-3 sm:mb-4 block">From the Blog</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Articles
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Deep dives into debugging, performance, and architecture patterns.
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3 mb-6 sm:mb-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card-glass rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all group"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors mb-2 sm:mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="text-xs text-muted-foreground/60">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog" className="btn-ghost">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
