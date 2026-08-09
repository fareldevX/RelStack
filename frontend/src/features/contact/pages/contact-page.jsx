import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import { FiMail, FiSend, FiMapPin, FiPhone, FiArrowLeft } from "react-icons/fi";
import { submitContactForm } from "@/lib/api/contact-api";

function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await submitContactForm(formData);
      setStatusMessage("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage(
        error?.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="min-h-screen py-24 sm:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={() => navigate("/", { replace: false })}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-color-border/60 dark:border-color-dark-border/60 px-4 py-2 text-sm font-medium text-primary dark:text-surface hover:bg-primary/95 hover:text-surface dark:hover:bg-primary/70 transition-colors cursor-pointer"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </button>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  Contact
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold text-primary dark:text-surface tracking-tight">
                  Let&apos;s build something meaningful together.
                </h1>
                <p className="text-base leading-7 text-secondary dark:text-secondary-dark">
                  Have a project in mind, need technical consultation, or just
                  want to say hello? I&apos;d love to hear from you.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/70 dark:bg-primary/70 p-5 shadow-sm">
                  <div className="flex items-center gap-3 text-primary dark:text-surface">
                    <FiMail size={18} />
                    <span className="font-medium">Email</span>
                  </div>
                  <a
                    href="mailto:farelarlishorlandoo@gmail.com"
                    className="mt-3 block text-sm text-secondary dark:text-secondary-dark hover:text-accent"
                  >
                    farelarlishorlandoo@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/70 dark:bg-primary/70 p-5 shadow-sm">
                  <div className="flex items-center gap-3 text-primary dark:text-surface">
                    <FiPhone size={18} />
                    <span className="font-medium">Phone</span>
                  </div>
                  <p className="mt-3 text-sm text-secondary dark:text-secondary-dark">
                    +62 823-2247-2552
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/70 dark:bg-primary/70 p-5 shadow-sm">
                <div className="flex items-center gap-3 text-primary dark:text-surface">
                  <FiMapPin size={18} />
                  <span className="font-medium">Location</span>
                </div>
                <p className="mt-3 text-sm text-secondary dark:text-secondary-dark">
                  Tegal, Central Java, Indonesia
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/90 dark:bg-primary/80 p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-primary dark:text-surface">
                Send me a message
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary dark:text-secondary-dark">
                Tell me about your idea and I&apos;ll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary dark:text-surface mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-color-border/70 dark:border-color-dark-border/70 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary dark:text-surface mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-color-border/70 dark:border-color-dark-border/70 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary dark:text-surface mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-color-border/70 dark:border-color-dark-border/70 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {statusMessage && (
                  <p
                    className={`text-sm ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}
                  >
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-surface hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FiSend size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactPage;
