import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Nav.css";
import { Mail, Menu } from "lucide-react";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="nav-header" // backdrop-filter inline — Vite's production CSS minifier drops unprefixed backdrop-filter, see PROJECTSATE.md
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <nav className="nav-inner">
          <Logo />
          <div className="nav-center">
            <div className="nav-tab-group">
              <NavLink to="/" className="nav-tab">
                work
              </NavLink>
              <NavLink to="/about" className="nav-tab">
                about
              </NavLink>
              {/* <NavLink to="/code-lab" className="nav-tab">
                code lab
              </NavLink> */}
            </div>
          </div>
          <div className="nav-socials">
            <a
              href="https://www.linkedin.com/in/esztihollenback"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/esztike"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="mailto:eszti@esztihollenback.com" aria-label="Email">
              <Mail size={20} strokeWidth={2.5} />
            </a>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </nav>
      </header>

      {isOpen && (
        <>
          <div className="nav-backdrop" onClick={() => setIsOpen(false)} />
          <div
            className="nav-dropdown"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <NavLink
              to="/"
              className="nav-dropdown-link"
              onClick={() => setIsOpen(false)}
            >
              work
            </NavLink>
            <NavLink
              to="/about"
              className="nav-dropdown-link"
              onClick={() => setIsOpen(false)}
            >
              about
            </NavLink>
            {/* <NavLink
              to="/code-lab"
              className="nav-dropdown-link"
              onClick={() => setIsOpen(false)}
            
              code lab
            </NavLink> */}
            <a
              href="https://www.linkedin.com/in/esztihollenback"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-dropdown-link"
            >
              linkedin
            </a>
            <a
              href="https://github.com/esztike"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-dropdown-link"
            >
              github
            </a>
            <a
              href="mailto:eszti@esztihollenback.com"
              className="nav-dropdown-link"
            >
              email
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Nav;
