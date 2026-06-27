import React from "react";
import Section from "@/components/ui/section";
import { skills } from "./config/skills.config";

function Skills() {
  return (
    <Section id="skills" className="w-full overflow-hidden">
      {" "}
      {/* Menghindari kebocoran layout */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-24 md:py-32 bg-linear-to-b from-transparent via-slate-50/50 to-slate-100 dark:via-zinc-950/40 dark:to-zinc-950">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 select-none">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent/80 dark:text-accent block mb-3">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-zinc-100 uppercase">
            Skills
          </h2>
        </div>

        {/* List Skills */}
        <div className="flex flex-col gap-4 md:gap-8 w-full max-w-2xl items-center px-2">
          {skills.map((s, index) => {
            const isEven = index % 2 === 0;

            // Di mobile (default) tidak digeser agar aman, baru digeser mulai layar md (tablet/desktop)
            const alignmentClass = isEven
              ? "md:translate-x-[-32px]"
              : "md:translate-x-[32px]";

            return (
              <button
                key={s.id || s.name || index}
                className={`
                  /* Tipografi - Menggunakan clamp agar teks panjang tidak merusak layout mobile */
                  text-[clamp(1.8rem,6vw,3.75rem)] md:text-6xl font-black tracking-tight uppercase
                  
                  /* Animasi & Transisi */
                  transition-all duration-300 ease-in-out transform
                  cursor-pointer select-none outline-none block w-full text-center
                  
                  /* Posisi Staggered (Hanya aktif di Desktop) */
                  ${alignmentClass}
                  
                  /* Warna Default (Muted) */
                  text-slate-400 dark:text-zinc-600 
                  
                  /* State Hover (Desktop) & Active (Mobile/Touch) */
                  hover:text-accent dark:hover:text-accent
                  hover:scale-105
                  active:scale-95 active:text-accent dark:active:text-accent
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
