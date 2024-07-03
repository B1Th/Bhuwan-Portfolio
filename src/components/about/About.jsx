import { useEffect, useState, useRef } from "react";
import "./about.scss";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const text = `I'm a frontend developer with a knack for creating dynamic and visually appealing web applications. Skilled in frontend technologies, I build responsive, user-friendly interfaces and integrate APIs for efficient solutions. Always eager to learn and innovate, I thrive on solving complex problems and bringing creative ideas to life.`;

  const aboutRef = useRef(null);
  const animationComplete = useRef(false); // Track if animation has completed

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
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
  }, []);

  useEffect(() => {
    if (isInView && !animationComplete.current) {
      let index = 0;
      const typingSpeed = 50; // Adjust typing speed in milliseconds

      const typeWriter = () => {
        if (index <= text.length) {
          setTypedText(text.substring(0, index));
          index++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          animationComplete.current = true; // Mark animation as complete
        }
      };

      typeWriter();
    }
  }, [isInView, text]);

  return (
    <main>
      <div className="about" ref={aboutRef}>
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
        <div className="aboutContainer">
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
    </main>
  );
};

export default About;
