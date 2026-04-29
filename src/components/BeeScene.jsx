import { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
import "./BeeScene.css";

function BeeScene({ replay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const daisyControls = useAnimation();
  const daisyRef = useRef(null);

  useEffect(() => {
    const containerWidth = ref.current.getBoundingClientRect().width;
    const beeX = containerWidth * 0.08 + 16;

    controls.set({ x: containerWidth, y: 0 });

    if (!isInView) return;

    const animate = async () => {
      await controls.start({
        x: beeX,
        y: [0, -30, 10, -25, 8, -15, 0],
        transition: {
          duration: 5.5,
          ease: "easeInOut",
        },
      });
      await Promise.all([
        controls.start({
          y: [0, 8, 2, 5, 2],
          transition: {
            duration: 1.2,
            ease: "easeOut",
          },
        }),
        daisyControls.start({
          rotate: [0, -8, 4, -5, 2, 0],
          transition: {
            duration: 1.4,
            ease: "easeOut",
          },
        }),
      ]);
    };

    animate();
  }, [isInView, controls, daisyControls, replay]);

  return (
    <div className="bee-scene" ref={ref} aria-hidden="true">
      <div className="bee-scene-inner">
        <motion.img
          src="/bee.svg"
          alt=""
          className="bee"
          width="64"
          height="64"
          animate={controls}
        />
        <div className="daisy-wrapper">
          <motion.img
            ref={daisyRef}
            src="/daisy.svg"
            alt=""
            className="daisy"
            width="80"
            height="107"
            animate={daisyControls}
          />
        </div>
      </div>
    </div>
  );
}

export default BeeScene;
