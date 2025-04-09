import { Link } from "react-router-dom";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-inner">
        <h2>Så fungerar det</h2>
        <p>
          Våra föreläsningar bygger på positiv psykologi och VIA-karaktärsstyrkor – en
          forskningsbaserad modell som används i skolor och organisationer över hela världen.
        </p>

        <ul className="how-steps">
          <li>📋 Välj det upplägg som passar er – kort inspiration eller djupgående workshop</li>
          <li>🎯 Vi anpassar föreläsningen efter era mål och deltagarnas behov</li>
          <li>💡 Ni får konkreta verktyg och insikter att ta med er direkt i vardagen</li>
        </ul>

        <Link to="/forelasningar" className="cta-button">
          Läs mer om föreläsningarna
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;