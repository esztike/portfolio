import "./ShowcaseCard.css";
import { RefreshCw } from "lucide-react";

function ShowcaseCard({ number, title, story, githubUrl, onReplay, children }) {
  return (
    <section className="showcase-card">
      <div className="showcase-story">
        <h2 className="showcase-title">{title}</h2>
        <p className="showcase-desc">{story}</p>
      </div>
      <p className="showcase-number">{number}</p>
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
        <div className="showcase-content">{children}</div>
      </div>
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
    </section>
  );
}

export default ShowcaseCard;
