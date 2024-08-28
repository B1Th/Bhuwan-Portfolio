import React, { useRef, useEffect } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const SmoothScrolling = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const transform = useTransform(
    smoothScrollY,
    (value) => `translateY(-${value}px)`
  );

  useEffect(() => {
    const container = containerRef.current;
    const updateHeight = () => {
      document.body.style.height = `${container.clientHeight}px`;
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transform,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrolling;
