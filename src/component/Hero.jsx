import { useEffect, useState } from "react";
import "../styles/Hero.css";
import Button from "../component/Button";

const rotatingWords = [
  { word: "kreativitet", color: { bg: "#ffbac5", text: "#2727e6" } },
  { word: "nyfikenhet", color: { bg: "#15ab59", text: "#ff4141" } },
  { word: "uthållighet", color: { bg: "#ffe54d", text: "#15ab59" } },
  { word: "integritet", color: { bg: "#2727e6", text: " #ffbac5" } },
  { word: "entusiasm", color: { bg: "#ff4141", text: "#f8fafe" } },
  { word: "vänlighet", color: { bg: "#15ab59", text: " #ffbac5" } },
  { word: "kärleksfullhet", color: { bg: "#ffbac5", text: "#ffe54d" } },
  { word: "social intelligens", color: { bg: "#ffe54d", text: "#ffbac5" } },
  { word: "lojalitet", color: { bg: "#2727e6", text: " #ffbac5" } },
  { word: "rättvisa", color: { bg: "#ff4141", text: "#2727e6" } },
  { word: "ledarskap", color: { bg: "#15ab59", text: "#2727e6" } },
  { word: "humor", color: { bg: "#ffbac5", text: "#15ab59" } },
  { word: "mod", color: { bg: "#2727e6", text: " #ffbac5" } },
  { word: "kurage", color: { bg: "#ffe54d", text: "#3d3e40" } },
];

const rotatingQuotes = [
  {
    quote: "People grow through experience if they meet life honestly and courageously.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Character is doing the right thing when nobody's looking.",
    author: "J.C. Watts",
  },
  {
    quote: "The strength of the team is each individual member. The strength of each member is the team.",
    author: "Phil Jackson",
  },
  {
    quote: "Knowing others is intelligence; knowing yourself is true wisdom.",
    author: "Lao Tzu",
  },
  {
    quote: "Leadership is unlocking people’s potential to become better.",
    author: "Bill Bradley",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  const current = rotatingWords[index];
  const currentQuote = rotatingQuotes[index % rotatingQuotes.length];

  return (
    <section className="hero-container">
      <div className="hero-background-deco" />

      <div className="hero-inner">
        <h1 className="hero-title">
          Karakrätsstyrkor. Upptäck <span
            className="word"
            style={{ backgroundColor: current.color.bg, color: current.color.text }}
          >
            {current.word}
          </span> som bygger framtid och välmående
        </h1>
        <p className="hero-subtitle">
          Föreläsningar som inspirerar skolor och arbetsplatser att växa genom
          vetenskapligt baserad psykologi.
        </p>

        <div className="hero-buttons">
          <Button to="/forelasningar" primary>
            🎤 Se föreläsningar
          </Button>
          <Button to="/karaktarsstyrkor" secondary>
            🔍 Utforska styrkorna
          </Button>
        </div>
      </div>

      <aside className="hero-quote">
        <div className="quote-icon">💬</div>
        <div>{`“${currentQuote.quote}”`}</div>
        <div className="quote-source">– {currentQuote.author}</div>
      </aside>
    </section>
  );
};

export default Hero;
