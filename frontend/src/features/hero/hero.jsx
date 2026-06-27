import { useState, useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/utils/scroll-to-section";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { FaReact, FaRocket, FaStar, FaBolt, FaShapes } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const AnimatedLetter = ({ letter, icon, delay }) => {
  const Icon = icon;
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcon((prev) => !prev);
    }, 3000 + delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className="relative mx-0.5 inline-grid h-[1em] w-[0.8em] place-items-center align-bottom">
      <span className={`animatedItem ${showIcon ? "blurOut" : "blurIn"}`}>
        {letter}
      </span>
      <span
        className={`animatedItem ${showIcon ? "blurIn" : "blurOut"} iconColor`}
      >
        <Icon />
      </span>
    </span>
  );
};

function Hero() {
  const rocketRef = useRef(null);
  const starRef = useRef(null);
  const boltRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;

      if (rocketRef.current) {
        rocketRef.current.style.transform = `translateY(-${offsetY * 0.4}px)`;
      }
      if (starRef.current) {
        starRef.current.style.transform = `translateY(${offsetY * 0.2}px)`;
      }
      if (boltRef.current) {
        boltRef.current.style.transform = `translateY(-${offsetY * 0.3}px)`;
      }
      if (shapesRef.current) {
        shapesRef.current.style.transform = `translateY(${offsetY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0"></div>

      <div ref={rocketRef} className="parallaxWrapper">
        <div className="floatingObj rocket">
          <FaRocket />
        </div>
      </div>

      <div ref={starRef} className="parallaxWrapper">
        <div className="floatingObj star">
          <FaStar />
        </div>
      </div>

      <div ref={boltRef} className="parallaxWrapper">
        <div className="floatingObj bolt">
          <FaBolt />
        </div>
      </div>

      <div ref={shapesRef} className="parallaxWrapper">
        <div className="floatingObj shapes">
          <FaShapes />
        </div>
      </div>

      <div className="floatingObj circle1"></div>
      <div className="floatingObj circle2"></div>

      <Container className="relative z-2 flex min-h-[85vh] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex w-full max-w-275 flex-col items-center">
          <div className="mb-8 animate-[fadeDown_0.8s_ease-out_forwards] opacity-0">
            <span className="inline-block rounded-[30px] border border-subtle bg-surface px-5 py-2 text-[0.9rem] font-medium tracking-wide text-accent backdrop-blur-lg">
              Available for work
            </span>
          </div>

          <h1 className="mb-6 animate-[fadeUp_0.8s_ease-out_0.2s_forwards] text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary-text opacity-0">
            Build
            <AnimatedLetter letter="i" icon={FaReact} delay={0} />
            ng Mod
            <AnimatedLetter letter="e" icon={SiJavascript} delay={500} />
            rn Digital <br />
            Experiences
          </h1>

          <p className="mb-12 max-w-150 animate-[fadeUp_0.8s_ease-out_0.4s_forwards] text-[clamp(1.1rem,2vw,1.25rem)] leading-[1.6] text-secondary-text opacity-0">
            Transforming ideas into scalable, high-performance web applications
            with correct and modern technologies.
          </p>

          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              See My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
