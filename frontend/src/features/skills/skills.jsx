import React from "react";
import Section from "@/components/ui/section";
import { skills } from "./config/skills.config";

function Skills() {
  return (
    <Section id="skills" className="w-full">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 md:py-32 bg-linear-to-b from-transparent via-slate-50/50 to-slate-100 dark:via-zinc-950/40 dark:to-zinc-950">
        <div className="text-center mb-16 md:mb-24 select-none">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent/80 dark:text-accent block mb-3">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-zinc-100 uppercase">
            Skills
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl items-center">
          {skills.map((s, index) => {
            const isEven = index % 2 === 0;
            const alignmentClass = isEven
              ? "translate-x-[-12px] md:translate-x-[-32px]"
              : "translate-x-[12px] md:translate-x-[32px]";

            return (
              <button
                key={s.id || s.name || index}
                className={`
                  text-4xl md:text-6xl font-black tracking-tight
                  transition-all duration-300 ease-in-out transform
                  cursor-pointer select-none outline-none block w-full text-center
                  ${alignmentClass}
                  text-slate-400 hover:text-accent 
                  dark:text-zinc-600 dark:hover:text-accent
                  hover:scale-105 active:scale-98
                `}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
