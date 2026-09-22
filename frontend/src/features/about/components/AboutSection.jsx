import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AboutHeader from "./AboutHeader";
import AboutSummary from "./AboutSummary";
import AboutEducation from "./AboutEducation";
import AboutMediaSocial from "./AboutMediaSocial";
import AboutSkillList from "./AboutSkillList";

function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <AboutHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-24">
          <div className="space-y-8">
            <AboutSummary />

            <AboutEducation />

            <AboutMediaSocial />
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface tracking-wider uppercase">
              Technical Skill
            </h2>

            <AboutSkillList />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
