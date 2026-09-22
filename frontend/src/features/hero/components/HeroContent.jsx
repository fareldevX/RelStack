function HeroContent() {
  return (
    <div className="h-[85vh] sm:h-[75vh] flex flex-col items-center justify-center relative z-10">
      <span className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-3 font-sans">
        Selected Works &bull; 2026
      </span>
      <h1 className="font-portfolio text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal tracking-tight uppercase leading-none text-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent select-none">
        Portfolio
      </h1>
    </div>
  );
}

export default HeroContent;
