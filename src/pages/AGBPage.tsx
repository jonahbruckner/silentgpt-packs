import { Layout } from "@/components/layout/Layout";

export default function AGBPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Allgemeine Geschäftsbedingungen (AGB) für digitale Produkte
          </h1>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-8">
            <p className="text-amber-200 text-sm">
              <strong>Hinweis:</strong> Diese AGB sind ein allgemeiner Mustertext und ersetzen keine individuelle Rechtsberatung. 
              Bitte Inhalte vor Verwendung rechtlich prüfen lassen.
            </p>
          </div>

          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über den Kauf digitaler 
                Inhalte, die zwischen dem Anbieter und dem Kunden über die Website oder über angebundene 
                Verkaufsplattformen (z. B. Gumroad) geschlossen werden.
              </p>
              <p className="mt-2">
                Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt 
                ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 2 Vertragsgegenstand</h2>
              <p>
                Gegenstand des Vertrags ist der Erwerb digitaler Inhalte, insbesondere:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Markdown-Dateien (Artikel-Packs)</li>
                <li>PDF-Dokumente</li>
                <li>Sonstige digitale Materialien (z. B. Code-Beispiele, Templates)</li>
              </ul>
              <p className="mt-2">
                Die genaue Beschreibung des jeweiligen Produkts ergibt sich aus der Produktseite zum 
                Zeitpunkt des Kaufs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 3 Preise und Bezahlung</h2>
              <p>
                Alle angegebenen Preise verstehen sich als Endpreise. Soweit der Anbieter umsatzsteuerpflichtig 
                ist, ist die Umsatzsteuer im Preis enthalten.
              </p>
              <p className="mt-2">
                Die Bezahlung erfolgt über die externe Verkaufsplattform Gumroad. Gumroad bietet verschiedene 
                Zahlungsmethoden an (z. B. Kreditkarte, PayPal). Mit Abschluss des Bezahlvorgangs auf Gumroad 
                kommt der Kaufvertrag zustande.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 4 Lieferung / Bereitstellung</h2>
              <p>
                Nach erfolgreicher Bezahlung erhält der Kunde Zugang zu den digitalen Inhalten:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Über einen direkten Download-Link</li>
                <li>Über die Gumroad-Plattform (Bibliothek / E-Mail)</li>
              </ul>
              <p className="mt-2">
                Die Inhalte werden in der Regel sofort nach Zahlungseingang bereitgestellt. Der Kunde ist 
                dafür verantwortlich, eine korrekte E-Mail-Adresse anzugeben.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 5 Nutzungsrechte</h2>
              <p>
                Mit dem Kauf erwirbt der Kunde ein <strong>einfaches, nicht-exklusives Nutzungsrecht </strong> 
                zur persönlichen Nutzung der erworbenen Inhalte.
              </p>
              <p className="mt-2">Das bedeutet:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Die Inhalte dürfen für eigene Projekte, Notizen und Dokumentation verwendet werden.</li>
                <li>Die Inhalte dürfen nicht weiterverkauft, weitergegeben oder öffentlich zugänglich gemacht werden.</li>
                <li>Eine Nutzung in kommerziellen Produkten, die die Inhalte selbst als Produkt verkaufen, ist nicht gestattet.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 6 Widerrufsrecht</h2>
              <p>
                Das gesetzliche Widerrufsrecht für Verbraucher gilt grundsätzlich auch für digitale Inhalte. 
                <strong> Bei digitalen Inhalten erlischt das Widerrufsrecht jedoch, sobald wir mit der 
                Ausführung des Vertrags begonnen haben und Sie dem ausdrücklich zugestimmt haben.</strong>
              </p>
              <p className="mt-2">
                Im Checkout-Prozess auf Gumroad werden Sie gebeten, der sofortigen Bereitstellung der 
                digitalen Inhalte zuzustimmen und Ihr Widerrufsrecht entsprechend aufzugeben.
              </p>
              <p className="mt-2">
                <em>
                  Hinweis gemäß § 356 Abs. 5 BGB: Mit der Zustimmung zur sofortigen Vertragsausführung 
                  und der Kenntnisnahme, dass Sie dadurch Ihr Widerrufsrecht verlieren, erlischt das 
                  Widerrufsrecht bei vollständig erbrachter Dienstleistung.
                </em>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 7 Haftung</h2>
              <p>
                Der Anbieter haftet unbeschränkt nur bei Vorsatz und grober Fahrlässigkeit sowie bei 
                schuldhafter Verletzung wesentlicher Vertragspflichten.
              </p>
              <p className="mt-2">
                Im Übrigen ist die Haftung – soweit gesetzlich zulässig – ausgeschlossen. Weitere 
                Details finden Sie im <a href="/haftung" className="text-cyan-400 hover:underline">Haftungsausschluss</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">§ 8 Schlussbestimmungen</h2>
              <p>
                <strong>Anwendbares Recht:</strong> Es gilt das Recht der Bundesrepublik Deutschland 
                unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="mt-2">
                <strong>Gerichtsstand:</strong> Ist der Kunde Kaufmann, juristische Person des öffentlichen 
                Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand der Sitz des Anbieters.
              </p>
              <p className="mt-2">
                <strong>Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam 
                sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
              </p>
              <p className="mt-4 text-muted-foreground/80 italic">
                Stand: Dezember 2024
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
