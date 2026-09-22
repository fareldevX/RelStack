import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSection";

import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ExperienceSection } from "@/features/experience";
import { MarqueeSection } from "@/features/marquee";
import { ArchivesSection } from "@/features/archives";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;

    if (location.state?.fromOutsideHome && !section) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

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
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <MarqueeSection />
      <ArchivesSection />
    </>
  );
}

export default HomePage;
