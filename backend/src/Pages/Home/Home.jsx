import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../Projects/list/Projects";
import Quote from "../../components/Quote/Quote";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;
    if (!section) return;

    let rafId;

    const tryScroll = () => {
      const el = document.getElementById(section);

      if (el) {
        scrollToSection(section);
        navigate(".", { replace: true, state: null });
      } else {
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();

    return () => cancelAnimationFrame(rafId);
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
