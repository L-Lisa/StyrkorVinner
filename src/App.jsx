import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import StyrkorVinnerHem from "./pages/StyrkorVinnerHem.jsx";
import Forelasningar from "./pages/Forelasningar.jsx";
import Karaktarsstyrkor from "./pages/Karaktarsstyrkor.jsx";
import EnskildStyrka from "./pages/EnskildStyrka.jsx";
import Tack from "./pages/Tack.jsx";
import ContactForm from "./pages/ContactForm.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StyrkorVinnerHem />} />
        <Route path="/forelasningar" element={<Forelasningar />} />
        <Route path="/karaktarsstyrkor" element={<Karaktarsstyrkor />} />
        <Route path="/karaktarsstyrkor/:styrkenamn" element={<EnskildStyrka />} />
        <Route path="/kontakt" element={<ContactForm />} /> {/* 🆕 Lagt till kontaktformuläret */}
        <Route path="/tack" element={<Tack />} />
      </Routes>
    </Router>
  );
};

export default App;
