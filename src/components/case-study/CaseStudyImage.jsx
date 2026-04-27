function CaseStudyImage({ src, alt, caption, scrollable }) {
  return (
    <figure
      className={`case-study-image${scrollable ? " case-study-image--scroll" : ""}`}
    >
      <img src={src} alt={alt ?? caption ?? ""} className="cs-visual" />
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

export default CaseStudyImage;
