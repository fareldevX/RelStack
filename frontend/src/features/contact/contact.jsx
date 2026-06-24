import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import useNotification from "@/hooks/use-notification";
import { validationFormContact } from "./utils/validation-form";
import { submitContactForm } from "@/lib/api/contact-api";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { notify } = useNotification();

  const submit = async (e) => {
    try {
      e.preventDefault();

      const error = validationFormContact(form);
      if (error) {
        notify({ type: "error", message: error });
        return;
      }

      await submitContactForm(form);

      notify({
        type: "success",
        message: "Message sent — thank you!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      notify({
        type: "error",
        message: "Failed to send.",
      });
      console.error(err);
    }
  };

  return (
    <Section
      id="contact"
      className="relative z-2 rounded-t-[3.4rem] bg-secondary-bg"
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4 py-4">
        <div className="grid grid-col-1 gap-15">
          <div className="leading-16">
            <h2 className="mb-3.5 w-full max-w-135 text-[clamp(3.4rem,2.5vw,3.6rem)] text-inverse-primary">
              Have an idea? Let's build it.
            </h2>
            <a
              href="mailto:farelarlishorlando@gmail.com"
              className="text-[clamp(1.3rem,2.5vw,1.5rem)] text-inverse-primary underline"
            >
              farelarlishorlandoo@gmail.com <FiSend />
            </a>
          </div>

          <div className="socialMedia">
            <a
              href="https://www.linkedin.com/in/farel-arlish-orlando-8a5370399"
              target="_blank"
              rel="noreferrer"
            >
              <span>Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/farelarlish/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/fareldevX"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
            </a>
            <a
              href="https://wa.me/6282322472552"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="w-full">
          <div className="flex flex-col rounded-2xl border border-inverse bg-form-bg p-7">
            <h3 className="mb-2.5 text-[1.3rem] font-semibold text-inverse-primary">
              Quick Inquiry
            </h3>
            <div className="groups">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="groups">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="groups">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about you need..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button className="mt-6 cursor-pointer rounded-lg border-none bg-inverse-primary p-3.5 text-base font-semibold text-secondary-bg transition-colors duration-200 hover:bg-inverse-secondary">
              Send Request
            </button>
          </div>
        </form>
      </Container>
    </Section>
  );
}

export default ContactSection;
