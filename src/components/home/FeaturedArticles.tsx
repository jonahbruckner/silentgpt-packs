import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";

function formatDate(dateString?: string): string | null {
  if (!dateString) return null;
  const parsed = Date.parse(dateString);
  if (Number.isNaN(parsed)) return null;
  return new Date(parsed).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function FeaturedArticles() {
  const featured = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 sm:py-24 md:py-32 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <span className="section-label mb-4 block">From the Blog</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Articles
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deep dives into debugging, performance, and architecture patterns.
          </p>
        </div>
        
        <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3 mb-8 sm:mb-10">
          {featured.map((post) => {
            const formattedDate = formatDate(post.published_at);
            return (
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
                {formattedDate && (
                  <span className="text-xs text-muted-foreground/60">
                    {formattedDate}
                  </span>
                )}
              </Link>
            );
          })}
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
