import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MagButton.scss";

const MagButton = ({ text, link, isDownloadable }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 738);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - btnRect.left;
    const my = e.clientY - btnRect.top;
    e.currentTarget.style.setProperty("--x", `${mx}px`);
    e.currentTarget.style.setProperty("--y", `${my}px`);

    if (isMobile) return;

    const x = e.clientX - btnRect.left - btnRect.width / 2;
    const y = e.clientY - btnRect.top - btnRect.height / 2;
    setPosition({ x, y });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const btnRect = e.currentTarget.getBoundingClientRect();
    const mx = touch.clientX - btnRect.left;
    const my = touch.clientY - btnRect.top;
    e.currentTarget.style.setProperty("--x", `${mx}px`);
    e.currentTarget.style.setProperty("--y", `${my}px`);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={link}
      className="btn"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      animate={isMobile ? {} : { x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 50 }}
      {...(isDownloadable && { download: true })}
    >
      <p>{text}</p>
    </motion.a>
  );
};

export default MagButton;
