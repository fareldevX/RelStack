function AboutEducation() {
  return (
    <div className="space-y-2">
      <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface uppercase tracking-wider">
        Education
      </h2>

      <div className="flex flex-col min-[480px]:flex-row gap-1 min-[480px]:gap-4 text-sm font-semibold text-primary dark:text-surface">
        <p>2024 - Present</p>
        <div>
          <p>SMK Negeri 1 Adiwerna</p>
          <span className="font-normal text-secondary dark:text-secondary-dark">
            Network and Computer Engineering
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutEducation;
