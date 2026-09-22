import { LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";

function AboutMediaSocial() {
  return (
    <div className="flex items-center gap-2 mt-6">
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
  );
}

export default AboutMediaSocial;
