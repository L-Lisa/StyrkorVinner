// Button.jsx
import { Link } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ to, children, primary, secondary, color }) => {
  let className = "btn";

  if (primary) {
    className += " primary";
  } else if (secondary) {
    className += " secondary";
  }

  if (color === "blue") {
    className += " blue";
  } else if (color === "red") {
    className += " red";
  }

  return (
    <Link to={to} className={className} role="button">
      {children}
    </Link>
  );
};

export default Button
