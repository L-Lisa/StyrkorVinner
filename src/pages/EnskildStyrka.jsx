// Nova + Siri: Enskild styrka – SEO-optimerad styrkesida med fallback
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import Section from "../component/Section";
import Button from "../component/Button";

const styrkeTexter = {
  "nyfikenhet": {
    namn: "Nyfikenhet",
    intro: "Nyfikenhet handlar om en stark vilja att upptäcka, förstå och utforska världen.",
    användning: [
      "Ställ öppna frågor i samtal",
      "Utforska nya ämnen regelbundet",
      "Uppmuntra andras idéer innan du dömer"
    ],
    seo: {
      title: "Nyfikenhet – En karaktärsstyrka | Styrkor Vinner",
      description: "Läs om karaktärsstyrkan nyfikenhet – varför den är viktig, hur du stärker den och hur den bidrar till lärande och relationer."
    }
  },
  // Lägg till fler styrkor här i samma format
};

const Styrka = () => {
  const { styrkenamn } = useParams();
  const data = styrkeTexter[styrkenamn];

  if (!data) {
    return (
      <LandingLayout>
        <Helmet>
          <title>Styrkan hittades inte | Styrkor Vinner</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Section title="Styrkan finns inte">
          <p>Vi kunde tyvärr inte hitta den styrka du letade efter.</p>
          <Button to="/karaktarsstyrkor" secondary>🔙 Tillbaka till styrkorna</Button>
        </Section>
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Helmet>

      <Section
        title={data.namn}
        text={data.intro}
      >
        <h3>Så kan du använda styrkan:</h3>
        <ul>
          {data.användning.map((punkt, index) => (
            <li key={index}>✅ {punkt}</li>
          ))}
        </ul>
        <Button to="/karaktarsstyrkor" secondary>🔙 Tillbaka till alla styrkor</Button>
      </Section>
    </LandingLayout>
  );
};

export default Styrka;
