// Nova + Siri: Kontakt-sida med formulär och SEO
import { Helmet } from "react-helmet";
import LandingLayout from "../layout/LandingLayout";
import "../styles/Kontakt.css";

const Kontakt = () => {
  return (
    <LandingLayout>
      <Helmet>
        <title>Kontakta oss | Styrkor Vinner</title>
        <meta
          name="description"
          content="Skicka en bokningsförfrågan eller kontakta oss för mer information om våra föreläsningar om karaktärsstyrkor."
        />
      </Helmet>

      <section className="kontakt-section">
        <h1>📨 Kontakta oss</h1>
        <p>Vill du boka en föreläsning eller ställa en fråga? Fyll i formuläret så återkommer vi så snart vi kan.</p>

        <form className="kontakt-form" name="kontakt" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="kontakt" />

          <label htmlFor="namn">Namn</label>
          <input type="text" id="namn" name="namn" required />

          <label htmlFor="email">E-post</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="meddelande">Meddelande</label>
          <textarea id="meddelande" name="meddelande" rows="5" required></textarea>

          <button type="submit">📬 Skicka</button>
        </form>
      </section>
    </LandingLayout>
  );
};

export default Kontakt;