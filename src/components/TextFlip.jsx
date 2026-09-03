import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./TextFlip.css";

const words = ["ようこそ", "welcome", "bienvenue", "benvenuta", "üdvözöllek"];

function TextFlip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="textflip-wrapper">
      <div className="textflip-word-container">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className="textflip-word"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <h1 className="textflip-heading">code lab</h1>
      <p className="textflip-sub">
        A space where design intuition meets code. Experiments, small builds,
        things made to see if they could be.
      </p>
    </div>
  );
}

export default TextFlip;
