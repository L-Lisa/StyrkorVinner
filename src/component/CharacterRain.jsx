import React, { useState } from "react";
import "../styles/SectionRain.css"; // Nu använder vi ny stylefil

const strengths = [
  "Mod", "Kreativitet", "Empati", "Uthållighet", "Nyfikenhet",
  "Humor", "Social intelligens", "Tacksamhet", "Självreglering",
  "Entusiasm", "Lärande", "Ödmjukhet", "Ledarskap"
];

const getRandomPosition = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 40;
  const delay = Math.random() * 8;
  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${delay}s`
  };
};

const CharacterRain = () => {
  const [sprung, setSprung] = useState({});

  const handleClick = (index) => {
    setSprung((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setSprung((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    }, 600); // återställ efter sprätt
  };

  return (
    <div className="character-rain">
      {strengths.map((word, index) => {
        const style = getRandomPosition();
        const isClicked = sprung[index];
        return (
          <div
            key={`${word}-${index}`}
            className={`character-bubble${isClicked ? " sprung" : ""}`}
            style={style}
            onClick={() => handleClick(index)}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterRain;
