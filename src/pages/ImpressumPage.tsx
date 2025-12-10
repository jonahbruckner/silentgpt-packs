import { Layout } from "@/components/layout/Layout";

export default function ImpressumPage() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          <section className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Verantwortlich für den Inhalt dieser Seite</h2>
              <p className="text-muted-foreground/80 italic">Jonah Bruckner</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Anschrift</h2>
              <address className="not-italic space-y-1">
                <p>SilentGPT Engine</p>
                <p>86701 Rohrenfels</p>
                <p>Deutschland</p>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
              <p>E-Mail: <span className="text-cyan-400">silentgptdevengine@gmail.com</span></p>
              <p>Telefon: <span className="text-muted-foreground/80 italic">+49 152 53105186</span></p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Umsatzsteuer-Identifikationsnummer</h2>
              <p>USt-IdNr.: <span className="text-muted-foreground/80 italic">To be done!</span></p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Verantwortlichkeit für verlinkte Inhalte</h2>
              <p>
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                umgehend entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
