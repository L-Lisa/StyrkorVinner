import "../styles/SectionHighlight.css";

const SectionHighlight = ({ title, text, children }) => {
  return (
    <section className="section-highlight">
      <div className="highlight-inner">
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {children && <div className="highlight-content">{children}</div>}
      </div>
    </section>
  );
};

export default SectionHighlight;