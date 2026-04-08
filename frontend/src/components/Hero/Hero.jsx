import { useState, useEffect, useRef } from "react";
import { scrollToSection } from "../../utils/scrollToSection";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import styles from "./Hero.module.css";
import { FaReact, FaRocket, FaStar, FaBolt, FaShapes } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const AnimatedLetter = ({ letter, icon: Icon, delay }) => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIcon((prev) => !prev);
    }, 3000 + delay); // Stagger animations

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className={styles.animatedWrapper}>
      <span
        className={`${styles.animatedItem} ${showIcon ? styles.blurOut : styles.blurIn
          }`}
      >
        {letter}
      </span>
      <span
        className={`${styles.animatedItem} ${showIcon ? styles.blurIn : styles.blurOut
          } ${styles.iconColor}`}
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
    <Section id="home" className={styles.heroSection}>
      <div className={styles.absoluteBg}></div>

      {/* Floating Decorations with Parallax Wrappers */}
      <div ref={rocketRef} className={styles.parallaxWrapper}>
        <div className={`${styles.floatingObj} ${styles.rocket}`}>
          <FaRocket />
        </div>
      </div>

      <div ref={starRef} className={styles.parallaxWrapper}>
        <div className={`${styles.floatingObj} ${styles.star}`}>
          <FaStar />
        </div>
      </div>

      <div ref={boltRef} className={styles.parallaxWrapper}>
        <div className={`${styles.floatingObj} ${styles.bolt}`}>
          <FaBolt />
        </div>
      </div>

      <div ref={shapesRef} className={styles.parallaxWrapper}>
        <div className={`${styles.floatingObj} ${styles.shapes}`}>
          <FaShapes />
        </div>
      </div>

      <div className={`${styles.floatingObj} ${styles.circle1}`}></div>
      <div className={`${styles.floatingObj} ${styles.circle2}`}></div>

      <Container className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>Available for work</span>
          </div>

          <h1>
            Build
            <AnimatedLetter letter="i" icon={FaReact} delay={0} />
            ng Mod
            <AnimatedLetter letter="e" icon={SiJavascript} delay={500} />
            rn Digital <br />
            Experiences
          </h1>

          <p>
            Transforming ideas into scalable, high-performance web applications
            with correct and modern technologies.
          </p>

          <div className={styles.heroActions}>
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
