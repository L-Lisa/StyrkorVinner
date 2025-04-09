// Nova + Siri: En lekfull och varm tack-sida á la Google ✨
import { Helmet } from "react-helmet";
import LandingLayout from "../layout/LandingLayout";
import "../styles/Tack.css";
import { Link } from "react-router-dom";

const confetti = ["🎉", "🥳", "🎊", "💌", "🌟"];

const Tack = () => {
  return (
    <LandingLayout>
      <Helmet>
        <title>Tack för ditt meddelande | Styrkor Vinner</title>
        <meta
          name="description"
          content="Vi har tagit emot ditt meddelande och återkommer så snart vi kan."
        />
      </Helmet>

      <section className="tack-section">
        <div className="emoji-rain">
          {Array.from({ length: 15 }).map((_, i) => {
            const emoji = confetti[Math.floor(Math.random() * confetti.length)];
            const left = Math.floor(Math.random() * 100);
            const delay = Math.random() * 2;
            const duration = 4 + Math.random() * 3;

            return (
              <span
                key={i}
                className="emoji"
                style={{
                  left: `${left}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>

        <h1>Tack för att du hörde av dig! 🎉</h1>
        <p>
          Ditt meddelande är på väg till oss och vi återkommer snart.<br />
          Under tiden kan du läsa mer om våra <Link to="/forelasningar">föreläsningar</Link>{" "}
          eller utforska <Link to="/karaktarsstyrkor">karaktärsstyrkor</Link>.
        </p>
      </section>
    </LandingLayout>
  );
};

export default Tack;
