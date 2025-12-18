import { Layout } from "@/components/layout/Layout";

export default function DatenschutzPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Datenschutzerklärung
          </h1>

          <section className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Verantwortlicher
              </h2>
              <address className="not-italic space-y-1">
                <p>Jonah Bruckner</p>
                <p>Am Spielplatz 4</p>
                <p>86701 Rohrenfels</p>
                <p>Deutschland</p>
                <p>
                  E-Mail:{" "}
                  <span className="text-cyan-400">
                    jonahbruckner@gmail.com
                  </span>
                </p>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Hosting
              </h2>
              <p>
                Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
                CA 91789, USA, gehostet. Dabei verarbeitet Vercel technische
                Zugriffsdaten (z. B. IP-Adressen) zur Bereitstellung der Website.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse am sicheren und stabilen Betrieb der Website).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Verkauf über Gumroad
              </h2>
              <p>
                Der Verkauf digitaler Produkte erfolgt über Gumroad, Inc., 548
                Market St, San Francisco, CA 94104, USA. Gumroad verarbeitet
                personenbezogene Daten (z. B. Name, E-Mail-Adresse,
                Zahlungsinformationen) eigenverantwortlich zur
                Vertragsabwicklung.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Datenübermittlung in Drittländer
              </h2>
              <p>
                Die Nutzung von Vercel und Gumroad kann eine Übermittlung
                personenbezogener Daten in die USA beinhalten. Die Anbieter
                stützen sich dabei auf anerkannte Garantien wie
                Standardvertragsklauseln gemäß Art. 46 DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Rechte der betroffenen Personen
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
                <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
