function ContactHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center gap-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        A little about me
      </p>

      <h2 className="font-portfolio text-3xl font-bold text-primary dark:text-surface sm:text-5xl">
        Contact Me
      </h2>

      <p className="max-w-xl text-sm leading-relaxed text-secondary dark:text-secondary-dark">
        Get to know the person, background, and technical skills behind the
        work.
      </p>
    </div>
  );
}

export default ContactHeader;
