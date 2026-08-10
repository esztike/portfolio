import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < 400) {
        setVisible(false);
      } else if (y < lastY) {
        setVisible(true);
      } else if (y > lastY) {
        setVisible(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return createPortal(
    <button className="scroll-to-top" onClick={scrollUp}>
      <ArrowUp size={18} />
    </button>,
    document.body,
  );
}

export default ScrollToTop;
