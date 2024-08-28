import { useEffect, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Preloader from "./components/preloader/Preloader";
import About from "./components/about/About";
import { ReactLenis } from "@studio-freight/react-lenis";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      document.addEventListener("DOMContentLoaded", handleLoad);
    }

    const timeoutId = setTimeout(handleLoad, 5000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("DOMContentLoaded", handleLoad);
    };
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 1,
          duration: 1,
        }}
      >
        {loading ? (
          <Preloader />
        ) : (
          <div>
            <Cursor />
            <section id="Home">
              <Navbar />
              <Hero />
            </section>
            <Parallax />
            <section id="About">
              <About />
            </section>
            <section id="Services">
              <Services />
            </section>
            <Projects />
            <section id="Contact">
              <Contact />
            </section>
          </div>
        )}
      </ReactLenis>
    </>
  );
};

export default App;
