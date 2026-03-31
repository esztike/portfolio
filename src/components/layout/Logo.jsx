import { NavLink } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <NavLink
      to="/"
      className="logo"
      aria-label="Eszti Hollenback - home"
      title="Home"
    >
      <span className="logo-bracket logo-bracket--left">&lt;</span>
      <span className="logo-name">
        <span className="logo-e">e</span>
        <span className="logo-full">szti hollenback</span>
      </span>
      <span className="logo-bracket logo-bracket--right">&gt;</span>
    </NavLink>
  );
}

export default Logo;
