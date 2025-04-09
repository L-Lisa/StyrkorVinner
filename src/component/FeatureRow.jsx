import "../styles/FeatureRow.css";

const features = [
  {
    icon: "🎓",
    title: "För skolor",
    text: "Stärk trygghet, motivation och elevernas självbild.",
  },
  {
    icon: "🏢",
    title: "För företag",
    text: "Skapa samarbete, psykologisk trygghet och arbetsglädje.",
  },
  {
    icon: "🔬",
    title: "Evidensbaserat",
    text: "Vetenskaplig grund från positiv psykologi & VIA Institute.",
  },
  {
    icon: "🧭",
    title: "Personlig utveckling",
    text: "Hjälp individer hitta riktning, styrkor och livsglädje.",
  },
];

const FeatureRow = () => {
  return (
    <section className="feature-row-wrapper">
      <h2 className="feature-intro">Vem passar det här för?</h2>
      <div className="feature-row">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureRow;
