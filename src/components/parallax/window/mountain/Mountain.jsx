import React, { useRef } from "react";
import "./mountain.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Mountain = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-30%", "70%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  return (
    <section ref={ref}>
      <motion.div className="heading" style={{ y: yText }}>
        <h2>
          <span style={{ color: "lightGray" }}>Hello </span>World!
        </h2>
        <h4>
          Welcome To
          <span style={{ color: "lightGray" }}> My World!</span>
        </h4>
      </motion.div>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
    </section>
  );
};

export default Mountain;
