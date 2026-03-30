import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Eszti Hollenback / Logo</Link>
        <ul>
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
