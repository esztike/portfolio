import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Eszti Hollenback - home">
      <span className="logo-bracket logo-bracket--left">&lt;</span>
      <span className="logo-name">
        <span className="logo-e">e</span>
        <span className="logo-full">szti hollenback</span>
      </span>
      <span className="logo-bracket logo-bracket--right">&gt;</span>
    </Link>
  );
}

export default Logo;
