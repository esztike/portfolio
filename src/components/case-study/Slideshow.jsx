import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Slideshow.css";

function Slideshow({ images = [], caption }) {
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
          <ChevronLeft size={16} />
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
          <ChevronRight size={16} />
        </button>
      </div>
      {caption && <p className="slideshow-caption">{caption}</p>}
    </div>
  );
}

export default Slideshow;
