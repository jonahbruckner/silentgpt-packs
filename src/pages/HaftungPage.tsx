import { Layout } from "@/components/layout/Layout";

export default function HaftungPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Haftungsausschluss
          </h1>

          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Haftung für Inhalte
              </h2>
              <p>
                Die Inhalte dieser Website und der angebotenen digitalen
                Produkte wurden mit größtmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit oder Aktualität wird jedoch keine
                Gewähr übernommen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Keine Beratung
              </h2>
              <p>
                Die bereitgestellten Inhalte stellen keine Rechts-, Steuer- oder
                Fachberatung dar. Die Nutzung erfolgt auf eigene Verantwortung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Haftung für digitale Produkte
              </h2>
              <p>
                Eine Haftung für Schäden, die aus der Nutzung oder Nichtnutzung
                der Inhalte entstehen, ist – soweit gesetzlich zulässig –
                ausgeschlossen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
