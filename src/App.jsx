import { useEffect, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Cursor />
          <section id="Home">
            <Navbar />
            <Hero />
          </section>
          <section>
            <Parallax type="services" />{" "}
          </section>
          <section id="Services">
            <Services />
          </section>
          <section id="Portfolio">
            <Parallax type="portfolio" />{" "}
          </section>
          <Portfolio />
          <section id="Contact">
            <Contact />
          </section>
        </div>
      )}
    </>
  );
};

export default App;
