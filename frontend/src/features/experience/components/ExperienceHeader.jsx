function ExperienceHeader() {
  return (
    <div className="mb-14 flex flex-col gap-3 sm:mb-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        My journey
      </p>

      <h2 className="font-portfolio text-3xl font-bold text-primary dark:text-surface sm:text-5xl">
        Experience
      </h2>

      <p className="max-w-xl text-sm leading-relaxed text-secondary dark:text-secondary-dark">
        A timeline of the experiences and milestones shaping how I build on the
        web.
      </p>
    </div>
  );
}

export default ExperienceHeader;
