// Nova + Siri: SEO-optimerad sida för karaktärsstyrkor
import { Helmet } from "react-helmet";
import LandingLayout from "../layout/LandingLayout";
import Section from "../component/Section";
import { Link } from "react-router-dom";
import "../styles/StrengthGrid.css";

const strengths = [
  "Nyfikenhet", "Kreativitet", "Mod", "Uthållighet",
  "Självreglering", "Social intelligens", "Tacksamhet", "Entusiasm",
  "Vänlighet", "Hopp", "Rättvisa", "Ledarskap",
  "Kärlek", "Lärande", "Andlighet", "Ödmjukhet",
  "Humor", "Integritet", "Förlåtelse", "Omdöme",
  "Kärlek till lärande", "Uppskattning av skönhet", "Ansvarsfullhet", "Försiktighet"
];

const Karaktarsstyrkor = () => {
  return (
    <LandingLayout>
      <Helmet>
        <title>Vad är karaktärsstyrkor? | Styrkor Vinner</title>
        <meta
          name="description"
          content="Utforska alla 24 karaktärsstyrkor – från mod och nyfikenhet till humor och empati. Baserat på positiv psykologi."
        />
        <meta property="og:title" content="Vad är karaktärsstyrkor?" />
        <meta property="og:description" content="Lär dig mer om nyfikenhet, vänlighet, hopp och andra styrkor – med rötter i forskning och mänsklig utveckling." />
      </Helmet>

      <Section
        title="Utforska dina karaktärsstyrkor"
        text="Karaktärsstyrkor är de bästa delarna av oss – egenskaper som hjälper oss att tänka klart, känna mening, bygga relationer och bidra till andra. Här kan du läsa mer om var och en av de 24 styrkorna."
      />

      <div className="strength-grid">
        {strengths.map((styrka, index) => (
          <Link
            to={`/karaktarsstyrkor/${styrka.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="strength-tile"
          >
            {styrka}
          </Link>
        ))}
      </div>
    </LandingLayout>
  );
};

export default Karaktarsstyrkor;
