import {
  motion as Motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  animate,
} from "framer-motion";
import { useRef } from "react";

function CaseStudyImage({ src, alt, caption, scrollable }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`,
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`,
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`,
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`,
      );
    }
  });

  return (
    <figure
      className={`case-study-image${scrollable ? " case-study-image--scroll" : ""}`}
    >
      {scrollable ? (
        <Motion.div
          ref={ref}
          style={{ maskImage }}
          className="cs-scroll-container"
        >
          <img src={src} alt={alt ?? caption ?? ""} className="cs-visual" />
        </Motion.div>
      ) : (
        <img src={src} alt={alt ?? caption ?? ""} className="cs-visual" />
      )}
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}

export default CaseStudyImage;
