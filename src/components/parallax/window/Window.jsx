import React, { useRef } from "react";
import "./window.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Window = () => {
  const windowRef = useRef();

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: windowRef,
    offset: ["0px 0px", "100vh 0px"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: windowRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: windowRef,
    offset: ["start start", "end center"],
  });

  const scale = useTransform(scrollYProgress1, [0, 1], [1, 9]);
  const xStar = useTransform(scrollYProgress2, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress2, [0, 1], ["-40%", "60%"]);
  const yPlanet = useTransform(scrollYProgress2, [0, 1], ["-40%", "60%"]);
  const yMount = useTransform(scrollYProgress3, [0, 1], ["10%", "0%"]);

  return (
    <div className="container" ref={windowRef}>
      <div className="starContainer">
        <motion.div className="stars" style={{ x: xStar }}></motion.div>
      </div>
      <div className="planetContainer">
        <motion.div className="planets" style={{ y: yPlanet }}></motion.div>
      </div>

      <div className="wrapper">
        <section className="windowSection">
          <motion.div className="window" style={{ scale }}></motion.div>
        </section>
        <section className="mountainSection">
          <motion.div className="heading" style={{ y: yText }}>
            <h2>
              <span style={{ color: "lightGray" }}>Hello </span>World!
            </h2>
            <h4>
              Welcome To
              <span style={{ color: "lightGray" }}> My World!</span>
            </h4>
          </motion.div>
          <motion.div className="mountains" style={{ y: yMount }}></motion.div>
        </section>
      </div>
    </div>
  );
};

export default Window;
