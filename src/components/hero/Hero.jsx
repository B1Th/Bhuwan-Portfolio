import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="social"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        }}
      >
        <a href="#">
          <img src="/facebook.png" alt="" srcset="" />
        </a>
        <a>
          <img src="/instagram.png" alt="" srcset="" />
        </a>
        <a>
          <img src="/youtube.png" alt="" srcset="" />
        </a>
        <a>
          <img src="/dribbble.png" alt="" srcset="" />
        </a>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Content Creator
      </motion.div>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BHUWAN THAPA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio"> See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="Scroll down"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="imageContainer"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <img src="/profile.png" alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
