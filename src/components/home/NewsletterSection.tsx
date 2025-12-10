import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="card-glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay updated.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
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
