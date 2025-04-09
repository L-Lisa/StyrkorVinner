// component/WhyBook.jsx
import "../styles/WhyBook.css";
import { Link } from "react-router-dom";

const WhyBook = () => {
  return (
    <section className="whybook-section">
      <div className="whybook-inner">
        <h2>Varför boka en styrkeföreläsning?</h2>
        <p>
          En föreläsning om karaktärsstyrkor är mer än bara inspiration – det är en investering i långsiktig trivsel, prestation och psykologisk hållbarhet. Genom att synliggöra och aktivera våra styrkor skapas en arbetsmiljö där både individer och grupper blomstrar.
        </p>

        <h3>För skolor</h3>
        <p>
          Styrkebaserad psykologi stärker elevers självkänsla, inlärning och motivation. Med ett gemensamt språk för positiva egenskaper främjas trygghet, inkludering och utveckling.
        </p>

        <h3>För arbetsplatser</h3>
        <p>
          När anställda får upptäcka och använda sina styrkor, ökar engagemanget och samarbetet. Styrkeföreläsningar skapar nya samtal, utvecklar ledarskap och bygger en arbetskultur där människor vill stanna och växa.
        </p>

        <h3>Vetenskaplig grund</h3>
        <p>
          Våra föreläsningar bygger på den evidensbaserade VIA-teorin och positiv psykologi – ett område med över 20 års forskning bakom sig. Du får inte bara inspiration, utan verktyg som fungerar i praktiken.
        </p>

        <blockquote className="testimonial">
        <Link to={"https://www.tandfonline.com/doi/full/10.1080/1359432X.2021.1952990#abstract"} className={"science"} role="button">”Studien visade att medarbetare som uppmuntrades att använda sina karaktärsstyrkor på jobbet upplevde ökad arbetstillfredsställelse, engagemang och prestation över tid. Effekterna var särskilt starka när styrkorna kopplades till meningsfullhet i arbetet.”
          <footer>– Moore, H. L., Bakker, A. B., & van Mierlo, H. </footer> </Link>
        </blockquote>
      </div>
    </section>
  );
};

export default WhyBook;
