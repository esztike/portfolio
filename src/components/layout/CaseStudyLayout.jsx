import { Link } from "react-router-dom";
import "./CaseStudyLayout.css";
import CaseStudyHero from "../case-study/CaseStudyHero";
import ScrollToTop from "../ui/ScrollToTop";
import { ChevronRight, ArrowLeft, Play } from "lucide-react";
import CaseStudyAudioPlayer from "../case-study/CaseStudyAudioPlayer";

function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  tldr,
  otherProjects,
  children,
  showAudioPlaceholder = true,
  audioSrc,
}) {
  const hasBody = Boolean(children);
  return (
    <main className="case-study-layout">
      <Link to="/" className="cs-back-nav-top">
        <span className="cs-guillemets">
          <span className="g1">‹</span>
          <span className="g2">‹</span>
          <span className="g3">‹</span>
        </span>
        work
      </Link>
      <CaseStudyHero src={heroImage} color={heroImage} />

      <div className="cs-container">
        <h1 className="cs-title">{title}</h1>
        {subtitle && <p className="cs-subtitle">{subtitle}</p>}
        <div className={`cs-tldr${hasBody ? "" : " cs-tldr-no-bottom"}`}>
          <span className="cs-tldr-label">&lt;tl;dr&gt;</span>
          <div className="cs-meta">
            <span className="cs-meta-key">PROJECT</span>
            <span className="cs-meta-value">{tldr.project}</span>
            <span className="cs-meta-key">ROLE</span>
            <span className="cs-meta-value">{tldr.role}</span>
            <span className="cs-meta-key">TIMELINE</span>
            <span className="cs-meta-value">{tldr.timeline}</span>
            <span className={`cs-meta-key${tldr.liveSite ? "" : " no-border"}`}>
              DELIVERABLES
            </span>
            <span
              className={`cs-meta-value${tldr.liveSite ? "" : " no-border"}`}
            >
              {tldr.deliverables}
            </span>
            {tldr.liveSite && (
              <>
                <span className="cs-meta-key no-border">LIVE SITE</span>
                <span className="cs-meta-value no-border">
                  <a
                    href={tldr.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-meta-terminal"
                  >
                    <span className="terminal-prompt">$ open</span>
                    <span className="terminal-cmd">
                      {tldr.liveSite.replace(/^https?:\/\//, "")}
                    </span>
                    <span className="terminal-cursor"></span>
                  </a>
                </span>
              </>
            )}
          </div>
          <div className="cs-hook">{tldr.hook}</div>
        </div>

        {audioSrc ? (
          <CaseStudyAudioPlayer src={audioSrc} />
        ) : showAudioPlaceholder ? (
          <div className="cs-audio-placeholder">
            <Play size={16} />
            case study narration: coming soon
          </div>
        ) : null}

        <div className="cs-body">{children}</div>

        {otherProjects && otherProjects.length > 0 && (
          <nav className="cs-other-projects">
            <p className="cs-other-projects-label">Other works</p>
            <ul className="cs-other-projects-list">
              {otherProjects.map((p) => (
                <li key={p.path}>
                  <Link to={p.path} className="cs-other-project-link">
                    <ChevronRight
                      size={16}
                      className="cs-other-project-chevron"
                    />
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <Link to="/" className="cs-back-nav-bottom">
          <ArrowLeft size={14} />
          back to work
        </Link>
      </div>
      <ScrollToTop />
    </main>
  );
}

export default CaseStudyLayout;
