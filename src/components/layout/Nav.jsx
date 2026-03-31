import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Nav.css";

function Nav() {
  return (
    <header className="nav-header">
      <nav className="nav-inner">
        <Logo />
        <ul calssName="nav-links">
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
