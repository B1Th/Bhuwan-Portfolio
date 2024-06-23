import React, { useRef } from "react";
import "./window.scss";
import Mountain from "./mountain/Mountain";
import { motion, useScroll, useTransform } from "framer-motion";

const Window = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="container">
      <div className="starContainer">
        <motion.div className="star" style={{ x: xBg }}></motion.div>
      </div>
      <div className="wrapper" ref={ref}>
        <section className="windowSection">
          <motion.div className="window" style={{ scale }}></motion.div>
        </section>
        <section className="mountainSection">
          <Mountain />
        </section>
      </div>
    </div>
  );
};

export default Window;
