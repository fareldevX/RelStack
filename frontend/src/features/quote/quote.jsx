import Section from "@/components/ui/section";
import picture from "../../assets/alex_morgan.png";

function Quote() {
  return (
    <Section className="sticky top-0 z-1 flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#1b1a3a,#0b0b1a)]">
      <div className="pointer-events-none absolute select-none whitespace-nowrap font-extrabold tracking-wide text-[clamp(6rem,20vw,18rem)] text-[rgba(255,255,255,0.05)]">
        CREATE
      </div>

      <div className="relative z-2 max-w-225 px-6 text-center text-inverse-primary">
        <span className="mb-3 block text-[4rem] text-[#4f5dff]">“</span>

        <h2 className="font-semibold text-[clamp(1.4rem,3vw,2.6rem)] leading-normal">
          "Good design is obvious. Great design is transparent. But exceptional
          design leaves a mark on the soul."
        </h2>

        <div className="mt-8 flex items-center justify-center gap-3">
          <img
            src={picture}
            alt="Alex Morgan"
            className="h-11 w-11 rounded-full"
          />
          <div>
            <strong>Farel Arlish Orlando</strong>
            <p className="text-[0.85rem] text-[rgba(255,255,255,0.7)]">
              Founder, Rel.Stack
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Quote;
