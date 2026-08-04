import Container from "../ui/container";
import { LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <footer className="pt-18 mt-18">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-4 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary dark:text-surface tracking-tighter">
              Ready to take <span className="text-accent">next step</span> for
              your business?
            </h3>
            <p className="text-sm text-secondary dark:text-secondary-dark">
              Have a project in mind, need technical consultation, or just want
              to say hi? Feel free to reach out and let's build something
              amazing together.
            </p>
          </div>

          <a
            href="mailto:farelarlishorlandoo@gmail.com?subject=Project%20Inquiry"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex gap-2 text-sm font-medium py-3 px-6 bg-primary text-surface border border-color-dark-border/80 rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Let's get in touch
            <FiSend
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        <div className="flex flex-col max-sm:gap-2 sm:flex-row items-center justify-center sm:justify-between py-6 mt-14 border-t border-slate-200/60 dark:border-slate-900/60">
          <div>
            <span className="text-xs text-secondary dark:text-secondary-dark">
              Copyright &copy; 2026 Farel Arlish Orlando
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/p4eel11"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
            >
              <LuInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/farel-arlish-orlando-8a5370399/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
            >
              <LuLinkedin size={22} />
            </a>
            <a
              href="mailto:farelarlishorlandoo@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
            >
              <LuMail size={22} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
