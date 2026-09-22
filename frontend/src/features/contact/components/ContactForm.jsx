import { useContact } from "../hooks/useContact";
import { FiSend } from "react-icons/fi";

function ContactForm() {
  const { formData, isSubmitting, statusMessage, handleChange, handleSubmit } =
    useContact();

  return (
    <div className="rounded-3xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/90 dark:bg-primary/80 p-6 sm:p-8 shadow-lg">
      <h2 className="text-2xl font-portfolio font-semibold text-primary dark:text-surface">
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
  );
}

export default ContactForm;
