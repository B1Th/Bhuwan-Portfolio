import { useRef } from "react";
import "./services.scss";
import { animate, inView, motion, useInView } from "framer-motion";

const boxItems = [
  {
    title: "Real-Time Monitoring",
    description:
      "EcoTrack is a web-based platform for real-time monitoring of environmental conditions. It provides users with live data on pollution levels from various global sensors.",
  },
  {
    title: "HealthSync",
    description:
      "HealthSync is a web application that aggregates data from various fitness and health devices into a single, easy-to-use dashboard. Users can track their health goals.",
  },
  {
    title: "LearnHub",
    description:
      "LearnHub is an interactive web portal designed for students and educators. It offers a wide range of online courses, tutorials, and educational resources across various subjects.",
  },
  {
    title: "Smart Shopping Assistant",
    description:
      "ShopEase is a web-based smart shopping assistant that helps users find the best deals and compare prices across multiple online stores. It offers personalized recommendations feature.",
  },
];

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {boxItems.map((item, index) => (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
