import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const paragraph =
    "I craft immersive digital narratives. My work intentionally shifts away from traditional, rigid corporate structures toward an interactive narrative that feels both professional and experimental.";
  const words = paragraph.split(" ");

  return (
    <section
      id="about"
      className="min-h-[140vh] relative w-full flex items-center justify-center px-6 py-24"
      ref={targetRef}
    >
      <div className="sticky top-1/3 max-w-6xl w-full">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
          / About Me
        </h3>

        <p className="text-4xl md:text-6xl font-bold leading-relaxed flex flex-wrap gap-x-3 gap-y-2">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = (index + 1) / words.length;

            return (
              <Word key={index} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="text-primary select-none transition-colors duration-75"
    >
      {children}
    </motion.span>
  );
}

export default AboutSection;
