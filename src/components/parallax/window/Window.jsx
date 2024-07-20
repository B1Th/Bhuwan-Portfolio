import React, { useRef } from "react";
import "./window.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Window = () => {
  const windowRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
  const yPlanet = useTransform(
    scrollYProgress2,
    [0, 1],
    isMobile ? ["-30%", "50%"] : ["-40%", "60%"]
  );
  const yMount = useTransform(scrollYProgress3, [0, 1], ["10%", "0%"]);

  return (
    <div className="container" ref={windowRef}>
      <div className="planetContainer">
        <motion.div className="planets" style={{ y: yPlanet }}></motion.div>
      </div>

      <div className="wrapper">
        <section className="windowSection">
          <motion.div className="window" style={{ scale }}></motion.div>
        </section>
        <section className="mountainSection">
          <motion.div className="mountains" style={{ y: yMount }}></motion.div>
        </section>
      </div>
    </div>
  );
};

export default Window;
