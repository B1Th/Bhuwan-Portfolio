import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./ProjectParallax.scss";
import { useSpring } from "framer-motion";
import { useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const items = [
  {
    id: "1",
    title: "Resume Parser",
    image: "/parser.png",
  },
  {
    id: "2",
    title: "Txt2Gen",
    image: "/txt2gen.png",
  },
  {
    id: "3",
    title: "Typing Quest",
    image: "/typing.png",
  },
  {
    id: "4",
    title: "CurrencyPro",
    image: "/currencypro.png",
  },
  {
    id: "5",
    title: "Portfolio",
    image: "/portfolio.png",
  },

  {
    id: "6",
    title: "NFT",
    image: "/nft.png",
  },

  {
    id: "7",
    title: "Dashboard",
    image: "/dashboard.png",
  },
  {
    id: "8",
    title: "Donut",
    image: "/donut.png",
  },
  {
    id: "9",
    title: "3D Website",
    image: "/3DWebsite.png",
  },
  {
    id: "10",
    title: "Repository Explorer",
    image: "/repositoryExplorer.png",
  },
];

const ProjectParallax = () => {
  const firstRow = items.slice(0, 5);
  const secondRow = items.slice(5, 10);
  const ref = useRef(null);
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 50, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3],
      isTablet ? [400, 750] : [400, 1000]
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.1, 1]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.3, 1], isTablet ? [100, 450] : [0, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.3, 1], isTablet ? [100, -250] : [0, -300]),
    springConfig
  );

  return (
    <>
      <div className="mainContainer" ref={ref}>
        <motion.div
          className="itemWrapper "
          style={{ rotateX, rotateZ, translateY, opacity }}
        >
          <div className="itemContainer">
            {firstRow.map((item) => (
              <motion.div
                className="item"
                key={item.id}
                style={{ x: translateX }}
                whileHover={{
                  y: -20,
                }}
              >
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </motion.div>
            ))}
          </div>
          <div className="itemContainer">
            {secondRow.map((item) => (
              <motion.div
                className="item"
                key={item.id}
                style={{ x: translateXReverse }}
                whileHover={{
                  y: -20,
                }}
              >
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectParallax;
