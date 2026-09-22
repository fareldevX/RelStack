import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceContent from "./ExperienceContent";

function ExperienceSection() {
  return (
    <Section id="experience" className="max-md:mt-18">
      <Container>
        <ExperienceHeader />

        <ExperienceContent />
      </Container>
    </Section>
  );
}

export default ExperienceSection;
