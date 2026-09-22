import { useEffect } from "react";
import { scrollTop } from "../utils/contactHelpers";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

function ContactSection() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <Section className="min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          <ContactHeader />

          <div className="flex items-start justify-center">
            <ContactForm />
          </div>

          <ContactFooter />
        </div>
      </Container>
    </Section>
  );
}

export default ContactSection;
