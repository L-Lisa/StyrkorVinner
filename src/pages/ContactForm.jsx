import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleShapeClick = (e) => {
    const shape = e.target;
    shape.classList.add("burst");
    setTimeout(() => {
      shape.classList.remove("burst");
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const thankYou = document.querySelector(".thank-you");
      if (thankYou) thankYou.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="contact-form-section experimental">
      <span className="bg-shape shape-1" onClick={handleShapeClick} />
      <span className="bg-shape shape-2" onClick={handleShapeClick} />
      <span className="bubble bubble-1" />
      <span className="bubble bubble-2" />
      <span className="bubble bubble-3" />
      <span className="bubble bubble-4" />

      {submitted ? (
        <div className="thank-you zoom-in-flash">
          <h2>💌 Tack för ditt meddelande!</h2>
          <p>Vi har tagit emot din förfrågan och återkommer så snart vi kan.</p>
          <Link to="/" className="btn-home">🏠 Till startsidan</Link>
        </div>
      ) : (
        <>
          <h2>📨 Skicka en förfrågan</h2>
          <p>
            Har du en fråga, vill boka en föreläsning eller veta mer om våra
            upplägg? Fyll i formuläret nedan så återkommer vi så snart vi kan.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <label htmlFor="name">Namn</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">📬 Skicka meddelande</button>
          </form>
        </>
      )}
    </section>
  );
};

export default ContactForm;