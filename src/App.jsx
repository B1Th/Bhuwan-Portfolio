// src/App.js
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
    const handleLoad = () => {
      setLoading(false);
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
          <section id="Services">
            <Services />
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
