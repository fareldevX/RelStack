import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import slide1 from "../../assets/about_slide_1.png";
import slide2 from "../../assets/about_slide_2.png";
import slide3 from "../../assets/about_slide_3.png";

const slides = [
  {
    image: slide1,
    title: "The Vision",
    text: "I believe great digital products are built at the intersection of design, performance, and empathy. Every pixel serves a purpose.",
  },
  {
    image: slide2,
    title: "My Philosophy",
    text: "I focus on building clean, scalable systems that are easy to maintain and delightful to use. Complexity should be hidden, not removed.",
  },
  {
    image: slide3,
    title: "What I Do",
    text: "From frontend architecture to UI systems, I help brands transform abstract ideas into tangible, high-impact digital realities.",
  },
];

function About() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolled = -top;
      const totalScrollable = height - windowHeight;

      if (totalScrollable <= 0) return;

      // Calculate raw progress in pixels/percentage of the total scrollable area
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
      <div className={styles.stickyContainer}>
        {slides.map((slide, index) => {
          // Logic for transforms
          // Total scrollable area spans 2 "transitions" (0->1, 1->2)
          // index 0: Always at 0, static.
          // index 1: Comes up when progress > 0. Ends at 0.5.
          // index 2: Comes up when progress > 0.5. Ends at 1.0.

          let translateY = 100; // Default off-screen down

          if (index === 0) {
            translateY = 0; // Always visible
          } else {
            // Calculate effective range for this slide
            // Transitions happen over 1/ (slides.length - 1) of the scroll
            const step = 1 / (slides.length - 1);
            const start = (index - 1) * step;
            const end = index * step;

            // Normalize progress for this specific slide's movement
            if (scrollProgress >= end) {
              translateY = 0;
            } else if (scrollProgress < start) {
              translateY = 100;
            } else {
              const localProgress = (scrollProgress - start) / (end - start);
              translateY = 100 - (localProgress * 100);
            }
          }

          // Determine if this slide is the "active" one for text display
          // It's active if it's the topmost visible slide
          // Text fades in when the slide is almost fully covering (translateY < 20% maybe?)
          // Or we can just use the exact same thresholds logic.
          const step = 1 / (slides.length - 1);
          const threshold = (index - 1) * step + (step * 0.7); // 70% into the transition

          // Simplified active logic: 
          // index 0 active if progress < 0.5 (and index 1 is not fully up)
          // index 1 active if progress > 0.5 ...
          // actually, simpler:
          // If index 2 is visible (translateY < 100), it's the focus? No.

          // Let's use opacity for text based on the same transform logic
          const isVisible = translateY < 50; // Visible if pulled up halfway
          const isCovered = scrollProgress > (index * step + 0.2); // Covered by next slide?

          // Text opacity logic refinement
          let textOpacity = 0;
          let textTransform = "translateY(20px)";

          if (index === 0) {
            // Slide 0 text fades out as Slide 1 comes up
            const nextSlideProgress = (scrollProgress - 0) / 0.5;
            if (scrollProgress < 0.2) {
              textOpacity = 1;
              textTransform = "translateY(0)";
            } else {
              textOpacity = 1 - (scrollProgress - 0.2) * 5; // Rapid fade out
              textTransform = "translateY(-20px)";
            }
          } else {
            // Other slides fade in as they arrive
            // They arrive from 100 to 0 translateY.
            // We want text to appear when translateY is near 0.
            if (translateY < 15 && !isCovered) {
              textOpacity = 1;
              textTransform = "translateY(0)";
            }

            // Fade out if covered by next (slide 1 covered by slide 2)
            if (index < slides.length - 1) {
              const nextStart = index * step;
              if (scrollProgress > nextStart + 0.1) {
                textOpacity = 0;
                textTransform = "translateY(-20px)";
              }
            }
          }
          // Clamp opacity
          textOpacity = Math.max(0, Math.min(1, textOpacity));

          return (
            <div
              key={index}
              className={styles.slide}
              style={{
                zIndex: index,
                transform: `translateY(${translateY}%)`,
              }}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={styles.overlay} />
              <div className={styles.contentWrapper}>
                <div
                  className={styles.textContent}
                  style={{
                    opacity: textOpacity,
                    transform: textTransform
                  }}
                >
                  <h2 className={styles.title}>{slide.title}</h2>
                  <p className={styles.text}>{slide.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
