import React, { useState, useEffect } from "react";
import "./parallax.scss";
import Window from "./window/Window";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Parallax = () => {
  const ref = useRef();
  const headingRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isInAboutSection, setIsInAboutSection] = useState(false);

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7495,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInAboutSection(true);
        } else {
          setIsInAboutSection(false);
        }
      });
    }, options);

    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <div className="parallax" ref={ref}>
      <Window />
      <motion.div className="heading" style={{ y: yText }} ref={headingRef}>
        <h2 style={{ color: isInAboutSection ? "orange" : "lightgray" }}>
          Who Am I?
        </h2>
      </motion.div>
      <div className="starContainer">
        <motion.div className="stars" style={{ x: xStar }} />
      </div>
    </div>
  );
};

export default Parallax;
