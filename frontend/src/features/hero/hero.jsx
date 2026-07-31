import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

function Hero() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-125 h-75 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="h-[85vh] sm:h-[75vh] flex flex-col items-center justify-center relative z-10">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 mb-3 font-sans">
            Selected Works &bull; 2026
          </span>
          <h1 className="font-portfolio text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-normal tracking-tight uppercase leading-none text-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent select-none">
            Portofolio
          </h1>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
