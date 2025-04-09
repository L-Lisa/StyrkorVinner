import "../styles/SnippetSection.css";

const SnippetSection = () => {
  return (
    <section className="snippet-section" itemScope itemType="https://schema.org/Article">
      <meta itemProp="author" content="Styrkor Vinner" />
      <meta itemProp="publisher" content="Styrkor Vinner" />
      <meta itemProp="headline" content="Vad är en föreläsning om styrkor?" />
      <meta itemProp="mainEntityOfPage" content="https://www.styrkorvinner.se/forelasningar" />

      <h2 itemProp="name">Vad är en föreläsning om styrkor?</h2>
      <p itemProp="description">
        En föreläsning om styrkor fokuserar på att identifiera och använda människors
        karaktärsstyrkor – som mod, nyfikenhet och vänlighet – i arbetslivet eller skolan.
        Genom praktiska exempel och forskning får deltagarna verktyg att skapa psykologisk
        trygghet, motivation och hållbara relationer.
      </p>
    </section>
  );
};

export default SnippetSection;