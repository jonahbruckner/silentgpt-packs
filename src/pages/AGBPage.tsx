import { Layout } from "@/components/layout/Layout";

export default function AGBPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 1 Geltungsbereich
              </h2>
              <p>
                Diese AGB gelten für alle digitalen Produkte, die über die
                Verkaufsplattform Gumroad angeboten werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 2 Vertragsgegenstand
              </h2>
              <p>
                Vertragsgegenstand sind digitale Inhalte (z. B. Texte,
                Anleitungen, Code-Beispiele, Templates).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 3 Preise und Zahlung
              </h2>
              <p>
                Alle Preise verstehen sich als Endpreise inklusive gesetzlicher
                Umsatzsteuer, sofern diese anfällt. Die Abrechnung erfolgt über
                Gumroad.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 4 Nutzungsrechte
              </h2>
              <p>
                Mit dem Kauf erhält der Kunde ein einfaches,
                nicht-übertragbares Nutzungsrecht zur eigenen Verwendung.
              </p>
              <p className="mt-2">
                Die Inhalte können vollständig oder teilweise KI-generiert sein.
                Eine Gewähr für Vollständigkeit oder Aktualität wird nicht
                übernommen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 5 Widerrufsrecht
              </h2>
              <p>
                Bei digitalen Inhalten erlischt das Widerrufsrecht, sobald der
                Kunde ausdrücklich zustimmt, dass mit der Ausführung des
                Vertrags vor Ablauf der Widerrufsfrist begonnen wird.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                § 6 Schlussbestimmungen
              </h2>
              <p>Es gilt deutsches Recht.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
