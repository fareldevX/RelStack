import Section from "@/components/ui/section";
import Marquee from "react-fast-marquee";
import { LuSparkles } from "react-icons/lu";

function MarqueeSection() {
  return (
    <Section className="my-120">
      <Marquee autoFill={true}>
        <span className="inline-flex gap-2 px-4 text-xl font-semibold text-primary dark:text-surface uppercase tracking-tighter">
          <LuSparkles size={26} /> Projects & Certifications
        </span>
      </Marquee>
    </Section>
  );
}

export default MarqueeSection;
