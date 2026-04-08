import { useRef, useEffect } from "react";
import Section from "../Section/Section";
import styles from "./Skills.module.css";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaPalette,
  FaServer,
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "UI/UX", icon: <FaPalette /> },
  { name: "REST API", icon: <FaServer /> },
];

function Skills() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const start = sectionTop;
      const end = sectionTop + sectionHeight - window.innerHeight;

      if (scrollY < start || scrollY > end) return;

      const progress = (scrollY - start) / (end - start);
      const maxTranslate = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section id="skills" ref={sectionRef} className={styles.skillsSection}>
      <div className={styles.skillsSticky}>
        <h3 className={styles.skillsTitle}>My Skills</h3>

        <div className={styles.skillsWrapperTrack}>
          <div ref={trackRef} className={styles.skillsTrack}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.card}>
                <div className={styles.progressLayer}></div>
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <span className={styles.cardTitle}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>
          I possess a strong foundation in modern web development, with a focus
          on building responsive, performant, and maintainable applications. My
          skill set includes frontend development, clean UI implementation, and
          the integration of scalable systems that prioritize both user
          experience and technical quality.
        </p>
      </div>
    </Section>
  );
}

export default Skills;
