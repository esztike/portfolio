import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
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
