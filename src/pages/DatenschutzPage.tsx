import { Layout } from "@/components/layout/Layout";

export default function DatenschutzPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <address className="not-italic mt-2 space-y-1">
                <p>Jonah Bruckner</p>
                <p>Am Spielplatz 4</p>
                <p>86701 Rohrenfels</p>
                <p>E-Mail: <span className="text-cyan-400">jonahbruckner@googlemail.com</span></p>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, z. B. wenn Sie 
                über eine E-Mail Kontakt mit uns aufnehmen oder ein digitales Produkt über unsere Verkaufsplattform erwerben.
              </p>
              <p className="mt-2">
                Zu den personenbezogenen Daten, die bei einem Kauf erhoben werden können, gehören unter anderem:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>E-Mail-Adresse</li>
                <li>Name (soweit bei der Bezahlung angegeben)</li>
                <li>Zahlungsinformationen (werden über den Zahlungsdienstleister verarbeitet)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Zugriffsdaten / Server-Logfiles</h2>
              <p>
                Der Hoster dieser Website erhebt automatisch technische Zugriffsdaten (sogenannte Server-Logfiles), 
                die Ihr Browser automatisch übermittelt. Dazu gehören unter anderem:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Verwendeter Browser und Betriebssystem</li>
                <li>Referrer-URL (die zuvor besuchte Seite)</li>
              </ul>
              <p className="mt-2">
                Diese Daten werden nur für technische Zwecke gespeichert und nicht mit anderen Datenquellen zusammengeführt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Einsatz von Drittanbietern</h2>
              <p>
                <strong>Hosting:</strong> Diese Website wird bei einem externen Dienstleister gehostet. 
                Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
              <p className="mt-2">
                <strong>Zahlungsdienstleister (Gumroad):</strong> Für den Verkauf digitaler Produkte nutzen wir die 
                Plattform Gumroad (Gumroad, Inc., USA). Bei einem Kauf werden Ihre Zahlungs- und Kontaktdaten direkt 
                von Gumroad verarbeitet. Wir erhalten nur die für die Abwicklung des Kaufs notwendigen Informationen. 
                Weitere Informationen finden Sie in der Datenschutzerklärung von Gumroad.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Rechtsgrundlage der Verarbeitung</h2>
              <p>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen, z. B. Websitebetrieb)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Speicherdauer</h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist 
                oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Rechte der betroffenen Personen</h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Auskunft</strong> über die bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li><strong>Beschwerde</strong> bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Kontakt für Datenschutzanfragen</h2>
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:
              </p>
              <p className="mt-2">
                E-Mail: <span className="text-cyan-400">jonahbruckner@googlemail.com</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
