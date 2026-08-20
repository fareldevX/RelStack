import { useEffect, useRef, useState } from "react";
import {
  LuArrowUpRight,
  LuBriefcaseBusiness,
  LuGraduationCap,
  LuServer,
  LuSparkles,
} from "react-icons/lu";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

const journey = [
  {
    period: "2024 - Present",
    title: "Network & Computer Engineering",
    description:
      "Building a strong foundation in networking, Linux infrastructure, and the systems behind reliable digital products.",
    icon: LuGraduationCap,
    tag: "Education",
  },
  {
    period: "2025",
    title: "Frontend Development",
    description:
      "Turning ideas into responsive interfaces with React, Tailwind CSS, and a focus on accessible, maintainable UI.",
    icon: LuSparkles,
    tag: "Craft",
  },
  {
    period: "2025 - 2026",
    title: "Full-Stack Exploration",
    description:
      "Expanding from the interface to the whole product with Express.js, Bun, MongoDB, and clean code architecture.",
    icon: LuServer,
    tag: "Engineering",
  },
  {
    period: "Next Chapter",
    title: "Ready to Build Together",
    description:
      "Looking for an internship or entry-level opportunity where thoughtful engineering can create a real, measurable impact.",
    icon: LuBriefcaseBusiness,
    tag: "Career",
  },
];

function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(second.boundingClientRect.top - window.innerHeight / 2),
          )[0];

        if (visibleEntry) {
          setActiveIndex(Number(visibleEntry.target.dataset.index));
        }
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="experience" className="scroll-m-14 sm:scroll-m-20">
      <Container>
        <div className="mb-14 flex flex-col gap-3 sm:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The journey
          </p>
          <h2 className="font-portfolio text-3xl font-bold text-primary dark:text-surface sm:text-5xl">
            Experience
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-secondary dark:text-secondary-dark">
            A timeline of the ideas, tools, and steps shaping how I build on the
            web.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-color-border dark:bg-color-dark-border md:left-1/2 md:-translate-x-1/2" />
          <div
            className="absolute left-4 top-0 w-px bg-accent transition-[height] duration-700 ease-out md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${((activeIndex + 1) / journey.length) * 100}%` }}
          />

          <div className="space-y-12 md:space-y-20">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={item.title}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className={`relative grid grid-cols-[2rem_1fr] items-start gap-5 md:grid-cols-2 md:gap-16 ${isLeft ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="relative z-10 col-start-1 row-start-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-page bg-surface text-secondary shadow-sm transition-all duration-500 dark:border-page-dark dark:bg-primary dark:text-secondary-dark md:absolute md:left-1/2 md:top-7 md:-translate-x-1/2">
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-500 ${isActive ? "scale-150 bg-accent" : "bg-secondary/50 dark:bg-secondary-dark/50"}`}
                    />
                  </div>

                  <div
                    className={`col-start-2 row-start-1 ${isLeft ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"}`}
                  >
                    <div
                      className={`group border border-color-border/70 bg-surface p-5 shadow-lg shadow-primary/5 transition-all duration-500 dark:border-color-dark-border/70 dark:bg-primary dark:shadow-black/10 sm:p-7 ${isActive ? "-translate-y-1 border-accent/60 shadow-accent/10" : ""}`}
                    >
                      <div
                        className={`mb-5 flex items-center gap-3 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-page text-accent dark:bg-page-dark">
                          <Icon size={20} />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary dark:text-secondary-dark">
                          {item.tag}
                        </span>
                      </div>
                      <p className="mb-2 text-sm font-semibold text-accent">
                        {item.period}
                      </p>
                      <h3 className="font-portfolio text-xl font-bold text-primary dark:text-surface sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-secondary dark:text-secondary-dark">
                        {item.description}
                      </p>
                      {index === journey.length - 1 && (
                        <a
                          href="#contact"
                          className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent dark:text-surface ${isLeft ? "md:flex-row-reverse" : ""}`}
                        >
                          Start a conversation <LuArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ExperienceSection;
