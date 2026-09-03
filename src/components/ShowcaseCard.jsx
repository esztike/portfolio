import "./ShowcaseCard.css";
import { RefreshCw } from "lucide-react";

function ShowcaseCard({
  title,
  story,
  githubUrl,
  liveUrl,
  onReplay,
  snippet,
  children,
}) {
  return (
    <section className="showcase-card">
      <div className="showcase-story">
        <h2 className="showcase-title">{title}</h2>
        <p className="showcase-desc">{story}</p>
      </div>

      <div className="showcase-frame">
        <div className="showcase-frame-bar">
          <span className="showcase-dot" />
          <span className="showcase-dot" />
          <span className="showcase-dot" />
        </div>
        {onReplay && (
          <button className="showcase-replay" onClick={onReplay}>
            <RefreshCw size={14} strokeWidth={2} />
            replay
          </button>
        )}
        <div
          className={`showcase-content${snippet ? " showcase-content--code" : ""}`}
        >
          {snippet ? (
            <pre className="showcase-snippet">
              <code>{snippet}</code>
            </pre>
          ) : (
            children
          )}
        </div>
      </div>
      {(githubUrl || liveUrl) && (
        <div className="showcase-links">
          {githubUrl && (
            <a
              className="showcase-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              view source on github
            </a>
          )}
          {liveUrl && (
            <a
              className="showcase-link"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              live site
            </a>
          )}
        </div>
      )}
    </section>
  );
}

export default ShowcaseCard;
