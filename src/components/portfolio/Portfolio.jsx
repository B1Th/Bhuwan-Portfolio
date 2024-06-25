import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Resume Parser And Ranker",
    img: "/resumeparser.png",
    desc: "A powerful resume parser that streamlines the recruitment process by automatically parsing resumes and ranking candidates based on their qualifications. Utilizing spaCy's Named Entity Recognition (NER) capabilities, it extracts key information from resumes, such as skills, experience, and education, enabling the application to effectively rank candidates according to the job description.",
    link: "https://creative-shortbread-02f6c5.netlify.app",
  },
  {
    id: 2,
    title: "Text To Image Generator",
    img: "/imagegen.png",
    desc: "A sophisticated Text-To-Image generator that interprets descriptive text to produce high-quality images, seamlessly translating concepts into vibrant visuals. This tool utilizes pretrained Stable Diffusion models, to cater to artists, designers, and developers. It facilitates the creation of detailed illustrations, virtual environments, or artistic creations with precision and creativity.",
    link: "https://monumental-gecko-f9f035.netlify.app",
  },
  {
    id: 3,
    title: "Currency Exchange Converter",
    img: "/excurrency.png",
    desc: "Currency Exchange Converter facilitates straightforward conversion between different currencies. This tool utilizes real-time exchange rates to accurately convert values, making it essential for travelers, investors, and businesses needing to manage international transactions efficiently. With intuitive user interfaces and reliable data sources, it offers convenience and reliability in calculating and comparing currency values instantly.",
    link: "https://heroic-dasik-25f7e6.netlify.app",
  },
  {
    id: 4,
    title: "Personal Portfolio Site",
    img: "/portfoliosite.png",
    desc: "A personal portfolio site designed to show off my skills and talents. It's a vibrant showcase of my best work, achievements, and expertise, perfect for catching the eye of employers, clients, or anyone curious about what I can do. With a clean, easy-to-use design, it makes sure that my creativity and abilities shine through. This portfolio is my way of saying, \"Here's what I'm capable of!\"",
    link: "https://bhuwan-thapa.com.np",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <a href={item.link} target="_blank">
              <motion.img
                src={item.img}
                alt=""
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </a>
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
