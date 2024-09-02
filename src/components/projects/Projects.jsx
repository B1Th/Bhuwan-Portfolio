import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Resume Parser And Ranker",
    vid: "/resumeparser.mp4",
    desc: "A powerful resume parser that streamlines the recruitment process by automatically parsing resumes and ranking candidates based on their qualifications. This tool is built using spaCy's Named Entity Recognition (NER) capabilities, that extracts key information from resumes, such as skills, experience, and education, enabling the application to effectively rank candidates according to the job description.",
    link: "https://resumeparse.netlify.app/",
    thumbnail: "/parser.png",
  },
  {
    id: 2,
    title: "Text To Image Generator",
    vid: "/imagegen.mp4",
    desc: "A sophisticated Text-To-Image generator that interprets descriptive text to produce high-quality images, seamlessly translating concepts into vibrant visuals. This tool utilizes pretrained Stable Diffusion models, to cater to artists, designers, and developers. It facilitates the creation of detailed illustrations, virtual environments, or artistic creations with precision and creativity.",
    link: "https://txt2gen.netlify.app/",
    thumbnail: "/txt2gen.png",
  },
  {
    id: 3,
    title: "Typing Quest: An Adventure Awaits",
    vid: "/typingquest.mp4",
    desc: "Type Quest features a fantasy-themed word set, real-time feedback, and a scoring system that challenges players to improve their typing speed and accuracy. Players type randomly generated words, with correct entries marked green, errors in red, and a final score is shown. This engaging tool gamifies typing practice, making it both fun and educational for users looking to enhance their typing skills.",
    link: "https://typingquest.netlify.app/",
    thumbnail: "/portfolio.png",
  },
  {
    id: 4,
    title: "CurrencyPro",
    vid: "/excurrency.mp4",
    desc: "CurrencyPro simplifies currency conversion with real-time exchange rates, making it perfect for anyone managing international transactions. With intuitive user interfaces and reliable data sources, it offers convenience and reliability in calculating and comparing currency values instantly.",
    link: "https://currencyproexchange.netlify.app/",
    thumbnail: "/currencypro.png",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Projects">
      <div className="container">
        <div className="wrapper">
          <div className="videoContainer" ref={ref}>
            <a href={item.link} target="_blank">
              <motion.video
                autoPlay
                loop
                muted
                playsInline
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              >
                <source src={item.vid} />
              </motion.video>
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

const Projects = () => {
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
    <div className="projects" ref={ref}>
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

export default Projects;
