import { useState } from "react";
import "./Slideshow.css";

function Slideshow({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="slideshow">
      <div className="slideshow-track">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="slideshow-image"
        />
      </div>
      <div className="slideshow-controls">
        <button className="slideshow-btn" onClick={prev}>
          ←
        </button>
        <div className="slideshow-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slideshow-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button className="slideshow-btn" onClick={next}>
          →
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
