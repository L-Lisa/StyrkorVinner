import { Link } from "react-router-dom";
import "../styles/Forelasningar.css";
import SectionHighlight from "../component/SectionHighlight";
import SnippetSection from "../component/SnippetSection";
import Button from "../component/Button";

const ForelasningarPage = () => {
  return (
    <div className="forelasningar-page">
      <header className="forelasning-hero">
        <h1>Föreläsningar om karaktärsstyrkor</h1>
        <p>
          För skolor, ledare och team som vill växa – med forskningsbaserade verktyg från
          positiv psykologi och VIA-modellen.
        </p>
        <Link to="/kontakt" className="cta-button">📩 Boka en föreläsning</Link>
      </header>

      <SnippetSection />

      <SectionHighlight
        title="Föreläsningarna bygger på vetenskap"
        text="Vi använder VIA-modellen och positiv psykologi – en forskningsbaserad grund som hjälper människor att blomstra. Används av tusentals skolor och organisationer världen över."
      />

      <section className="benefits-section">
        <h2>Vad får ni ut av en föreläsning?</h2>
        <ul>
          <li>✅ Ökad motivation och arbetsglädje</li>
          <li>✅ Färre konflikter, starkare samarbete</li>
          <li>✅ Elever/medarbetare förstår och använder sina styrkor</li>
          <li>✅ Ett gemensamt språk som bygger kultur</li>
          <li>✅ Forskningsbaserade metoder för hållbar förändring</li>
        </ul>
      </section>

      <section className="upplagg-section">
        <h2>Välj det upplägg som passar er</h2>
        <ul>
          <li>🕒 45 min inspirationsföreläsning</li>
          <li>🧠 90 min föreläsning + reflektionsövningar</li>
          <li>📘 Heldagsworkshop (föreläsning + styrkekartläggning)</li>
          <li>🌍 Digitalt eller fysiskt – vi anpassar oss</li>
        </ul>
      </section>

      <section className="research-section">
        <h2>Vad säger forskningen?</h2>
        <p>
          En studie av Harzer & Ruch (2021) visade att medarbetare som uppmuntrades att använda
          sina styrkor på jobbet fick ökad arbetstillfredsställelse, engagemang och prestation.
          <a
            href="https://www.tandfonline.com/doi/full/10.1080/1359432X.2021.1952990#abstract"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs studien här
          </a>
          .
        </p>
      </section>

      <section className="faq-section">
        <h2>Vanliga frågor</h2>
        <details>
          <summary>Hur vet vi att detta passar vår grupp?</summary>
          <p>
            Vi har föreläst för både elever, lärare, ledare och medarbetare inom många olika
            branscher. Innehållet anpassas efter era behov.
          </p>
        </details>
        <details>
          <summary>Kan ni anpassa till lärarfortbildning eller elevgrupper?</summary>
          <p>Ja! Vi skräddarsyr gärna upplägget för just er målgrupp.</p>
        </details>
        <details>
          <summary>Vad kostar det?</summary>
          <p>Priser beror på längd, format och upplägg – kontakta oss för offert.</p>
        </details>
      </section>

      <footer className="footer">
  <h2>Redo att boka?</h2>
  <p>
    Kontakta oss så skräddarsyr vi en föreläsning för just er organisation
    eller skola.
  </p>
  <Button to="/kontakt" primary>
    📨 Skicka en förfrågan
  </Button>
</footer>
    </div>
  );
};

export default ForelasningarPage;