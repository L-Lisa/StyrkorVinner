// Nova + Siri: Layout-komponent med global fallback SEO
import { Helmet } from "react-helmet";
import Header from "../component/Header";
import "../styles/Layout.css";

const LandingLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <title>Styrkor Vinner – Utforska dina karaktärsstyrkor</title>
        <meta
          name="description"
          content="Karaktärsstyrkor för personlig och organisatorisk utveckling. Forskning, föreläsningar och inspiration."
        />
      </Helmet>
      <Header />
      <main className="main-content" role="main">
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;