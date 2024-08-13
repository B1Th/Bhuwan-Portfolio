import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MagButton.scss";

const MagButton = ({ text, link, isDownloadable }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - btnRect.left - btnRect.width / 2;
    const y = e.clientY - btnRect.top - btnRect.height / 2;
    setPosition({ x, y });

    const mx = e.clientX - btnRect.left;
    const my = e.clientY - btnRect.top;
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
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 50 }}
      {...(isDownloadable && { download: true })}
    >
      <p>{text}</p>
    </motion.a>
  );
};

export default MagButton;
