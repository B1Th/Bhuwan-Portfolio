import { useEffect, useState, useRef } from "react";
import "./about.scss";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [typedText, setTypedText] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const text = `I'm a computer engineer based in Nepal with a passion for web development. I specialize in the MERN stack and have a solid foundation in frontend development. My portfolio showcases diverse projects built with a range of web technologies.`;

  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted) {
      let index = 0;
      const typingSpeed = 50;

      const typeWriter = () => {
        if (index <= text.length) {
          setTypedText(text.substring(0, index));
          index++;
          setTimeout(typeWriter, typingSpeed);
        }
      };

      typeWriter();
    }
  }, [animationStarted, text]);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"],
  });

  const ytext = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-1200%", "0%"] : ["-700%", "0%"]
  );

  return (
    <main>
      <div className="about" ref={aboutRef}>
        <motion.div className="heading" style={{ y: ytext }}>
          <h2 style={{ color: "lightgray" }}>Who Am I?</h2>
          <motion.div
            className="underline"
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
          ></motion.div>
        </motion.div>
        <div className="aboutContainer">
          <div className="iconContainer">
            <div className="icons">
              <div className="item">
                <img src="/sign.png" alt="" />
              </div>
              <div className="item">
                <img src="/internet.png" alt="" />
              </div>
              <div className="item">
                <img src="/about.png" alt="" />
              </div>
              <div className="item">
                <img src="/arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div className="textContainer">
            <div className="myDes">
              <p>
                {typedText}
                <span className="caret">|</span>
              </p>
            </div>
            <div className="nameDes">
              <i>~ Bhuwan Thapa</i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
