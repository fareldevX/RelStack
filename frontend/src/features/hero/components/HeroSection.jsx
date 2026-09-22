import Section from "@/components/ui/Section";
import Container from "@/components/ui/container";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <Section id="home" className="relative overflow-hidden">
      <HeroOverlay />

      <Container>
        <HeroContent />
      </Container>
    </Section>
  );
}

export default HeroSection;
