// StyrkorVinnerHem.jsx – Startsida med bakgrund, SEO & Hero
import { Helmet } from "react-helmet";
import LandingLayout from "../layout/LandingLayout";
import Hero from "../component/Hero";
import Section from "../component/Section";
import Button from "../component/Button";
import WhyBook from "../component/WhyBook";
import HowItWorks from "../component/HowItWorks";



import "../styles/StyrkorVinnerHem.css"; // Ny bakgrundsstil här

const StyrkorVinnerHem = () => {
  return (
    <LandingLayout>
      <div className="background-morph"></div>

      <Helmet>
        <title>Styrkor Vinner – Föreläsningar om karaktärsstyrkor för skolor & organisationer</title>
        <meta
          name="description"
          content="Inspirerande föreläsningar om karaktärsstyrkor – nyfikenhet, mod, glädje och samarbete. För skolor, ledare och team som vill växa."
        />
        <meta property="og:title" content="Styrkor Vinner – Föreläsningar om karaktärsstyrkor" />
        <meta property="og:description" content="Stärk team och elever med evidensbaserade föreläsningar om karaktärsstyrkor. Boka för er skola eller organisation idag!" />
      </Helmet>

      <Hero />
  

      <Section
        title="Vad är karaktärsstyrkor?"
        text="Karaktärsstyrkor är våra mest positiva egenskaper – som nyfikenhet, mod, humor och empati. När vi använder dem växer vi som människor och grupper. "
        text2="Ett sätt att skilja på karaktärsstyrkor och inlärda förmågor är att personer som använder inlärda förmågor snabbare känner sig utmattade än de som använder sina styrkor. Att använda sina styrkor gör en starkare, det är varje persons egna recept för framgång på alla plan. Vi tycker att alla ska ha tillgång till sina styrkor. "
        link={{ to: "/karaktarsstyrkor", text: "👉 Läs mer om karaktärsstyrkor" }}
        showRain={true}
      />
<WhyBook />
      
      <Section
        title="Exempel på styrkor vi lyfter"
        text="Nyfikenhet, självreglering, kreativitet, hopp, mod, vänlighet och fler – totalt 24 styrkor att upptäcka."
        link={{ to: "/karaktarsstyrkor", text: "👉 Utforska alla 24 styrkor" }}
      />
<HowItWorks />
      <footer className="footer">
        <h2>Redo att boka?</h2>
        <p>Kontakta oss så skräddarsyr vi en föreläsning för just er organisation eller skola.</p>
        <Button to="/kontakt" primary>📨 Skicka förfrågan</Button>
      </footer>
    </LandingLayout>
  );
};

export default StyrkorVinnerHem;
