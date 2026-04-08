import { Link } from "react-router-dom";
import "./CaseStudyLayout.css";

function CaseStudyLayout({ title, heroImage, tldr, otherProjects, children }) {
  return (
    <main className="case-study-layout">
      <Link to="/" className="cs-back-nav-top">
        ← /work
      </Link>
      <div
        className="cs-hero"
        style={{ background: heroImage || "var(--color-indigo)" }}
      />

      <div className="cs-container">
        <h1 className="cs-title">{title}</h1>

        <div className="cs-tldr">
          <p className="cs-tldr-label">&lt;tldr&gt;</p>
          <div className="cs-meta">
            <span>
              <strong>PROJECT</strong> — {tldr.project}
            </span>
            <span>
              <strong>ROLE</strong> — {tldr.role}
            </span>
            <span>
              <strong>TIMELINE</strong> — {tldr.timeline}
            </span>
            <span>
              <strong>DELIVERABLES</strong> — {tldr.deliverables}
            </span>
          </div>
          <div className="cs-hook">{tldr.hook}</div>
        </div>

        <div className="cs-audio-placeholder">
          ▶ audio narration — coming soon
        </div>

        <div className="cs-body">{children}</div>

        {otherProjects && otherProjects.length > 0 && (
          <nav className="cs-other-projects">
            <p className="cs-other-projects-label">Other projects</p>
            <ul className="cs-other-projects-list">
              {otherProjects.map((p) => (
                <li key={p.path}>
                  <Link to={p.path}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <Link to="/" className="cs-back-nav-bottom">
          ← back to all work
        </Link>
      </div>
    </main>
  );
}

export default CaseStudyLayout;
