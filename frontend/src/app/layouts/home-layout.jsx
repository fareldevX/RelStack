import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../../features/hero/hero";
import Skills from "../../features/skills/skills";
import Quote from "../../features/quote/quote";
import Footer from "../../components/layouts/footer";
import AboutSection from "../../features/about/about";
import ContactSection from "../../features/contact/contact";
import ArchivesSection from "../../features/archives/pages/archives";
import { scrollToSection } from "@/lib/utils/scroll-to-section";

function HomePage() {
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
      <AboutSection />
      <Skills />
      <ArchivesSection />
      <Quote />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
