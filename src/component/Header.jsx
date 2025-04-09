// Nova + Siri: Header – tillgänglig, mobilvänlig, Google-inspirerad
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar" role="navigation" aria-label="Huvudnavigation">
        <div className="logo">
          <Link to="/">
            <span className="logo-mark" aria-hidden="true">💡</span>
            <span className="logo-text">Styrkor Vinner</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/forelasningar">Föreläsningar</Link></li>
          <li><Link to="/karaktarsstyrkor">Karaktärsstyrkor</Link></li>
         {/* <li><Link to="/kontakt" className="nav-cta">Kontakta</Link></li>*/}
        </ul>
      </nav>
    </header>
  );
};

export default Header;