import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="card-glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 text-center animate-fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Stay updated.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
            Join 500+ developers receiving weekly FastAPI + Python Data engineering patterns and debugging insights.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
