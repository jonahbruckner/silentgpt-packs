import { Layout } from "@/components/layout/Layout";

export default function HaftungPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Haftungsausschluss</h1>
          
          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Dennoch übernehmen wir 
                keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Inhalte.
              </p>
              <p className="mt-2">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach 
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für Links</h2>
              <p>
                Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
              <p className="mt-2">
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Keine individuelle Beratung</h2>
              <p>
                Die auf dieser Website und in den digitalen Produkten bereitgestellten Inhalte dienen 
                ausschließlich allgemeinen Informationszwecken. Sie stellen keine individuelle Rechts-, 
                Steuer- oder Entwicklungsberatung dar.
              </p>
              <p className="mt-2">
                Die Verwendung der Inhalte in eigenen Projekten erfolgt auf eigene Verantwortung. Wir 
                empfehlen, bei konkreten Fragen oder Problemen einen qualifizierten Fachmann hinzuzuziehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Haftung für digitale Produkte</h2>
              <p>
                Die digitalen Inhalte (z. B. Markdown-Dateien, PDFs, Artikel-Packs) werden sorgfältig erstellt 
                und geprüft. Dennoch übernehmen wir keine Garantie dafür, dass die Inhalte fehlerfrei sind 
                oder für den vom Käufer beabsichtigten Zweck geeignet sind.
              </p>
              <p className="mt-2">
                Die Haftung für Schäden, die aus der Nutzung oder Nichtnutzung der angebotenen Inhalte 
                entstehen, ist – soweit gesetzlich zulässig – ausgeschlossen, es sei denn, es liegt 
                Vorsatz oder grobe Fahrlässigkeit unsererseits vor.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
