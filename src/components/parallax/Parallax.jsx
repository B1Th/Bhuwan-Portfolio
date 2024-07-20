import React from "react";
import "./parallax.scss";
import Window from "./window/Window";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Parallax = () => {
  const ref = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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

  return (
    <div className="parallax" ref={ref}>
      <Window />
      <motion.div className="heading" style={{ y: yText }}>
        <h2 style={{ color: "lightgray" }}>Who Am I?</h2>
      </motion.div>
      <div className="starContainer">
        <motion.div className="stars" style={{ x: xStar }} />
      </div>
    </div>
  );
};

export default Parallax;
