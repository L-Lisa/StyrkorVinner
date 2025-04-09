import React from "react";
import CharacterRain from "./CharacterRain";
import "../styles/Section.css";

const Section = ({ title, text, text2, link, highlight, children, showRain }) => {
  return (
    <section className={`section ${highlight ? "highlight" : ""}`} style={{ position: "relative" }}>
      <div className="section-inner">
        <h2>{title}</h2>
        {text && <p>{text}</p>}
        {text2 && <p>{text2}</p>}
        {children}
        {link && (
          <div className="section-link">
            <a href={link.to}>{link.text}</a>
          </div>
        )}
      </div>
      {showRain && <CharacterRain />}
    </section>
  );
};

export default Section;
