import { Layout } from "@/components/layout/Layout";

export default function ImpressumPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>

          <section className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <address className="not-italic space-y-1">
                <p><strong>Jonah Bruckner</strong></p>
                <p>Am Spielplatz 4</p>
                <p>86701 Rohrenfels</p>
                <p>Deutschland</p>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <span className="text-cyan-400">
                  jonahbruckner@gmail.com
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Umsatzsteuer
              </h2>
              <p>Umsatzsteuer wird gemäß den gesetzlichen Vorschriften erhoben.</p>
              <p className="italic text-muted-foreground/80">
                Die Umsatzsteuer-Identifikationsnummer wird nach Erteilung ergänzt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Jonah Bruckner</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
