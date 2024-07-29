import React, { useState, useEffect } from "react";
import "./parallax.scss";
import Window from "./window/Window";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useSpring } from "framer-motion";

const Parallax = () => {
  const ref = useRef();
  const headingRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showUnderline, setShowUnderline] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 50%", "150% 100%"],
  });

  const xStar = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-20%", "45%"] : ["10%", "35%"]
  );
  const yText = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-20%", "58%"] : ["-18%", "55%"]
  );

  const underlineWidth = useSpring(0, {
    stiffness: 100,
    damping: 10,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.98) {
        setShowUnderline(true);
        underlineWidth.set(150);
      } else {
        setShowUnderline(false);
        underlineWidth.set(0);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="parallax" ref={ref}>
      <Window />
      <motion.div className="heading" style={{ y: yText }} ref={headingRef}>
        <h2>Who Am I?</h2>
        {showUnderline && (
          <motion.div
            className="underline"
            style={{ width: underlineWidth }}
          ></motion.div>
        )}
      </motion.div>
      <div className="starContainer">
        <motion.div className="stars" style={{ x: xStar }} />
      </div>
    </div>
  );
};

export default Parallax;
