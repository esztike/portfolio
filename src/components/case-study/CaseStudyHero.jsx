import "./CaseStudyHero.css";

function CaseStudyHero({ src, alt, color }) {
  if (src) {
    return <img src={src} alt={alt || ""} className="cs-hero-image" />;
  }

  return (
    <div
      className="cs-hero-image"
      style={{ background: color || "var(--color-indigo)" }}
    />
  );
}

export default CaseStudyHero;
