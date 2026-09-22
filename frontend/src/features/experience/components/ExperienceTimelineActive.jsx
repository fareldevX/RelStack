function ExperienceTimelineActive({ activeIndex, totalItems }) {
  return (
    <div
      className="absolute left-4 top-0 w-px bg-accent transition-[height] duration-700 ease-out md:left-1/2 md:-translate-x-1/2"
      style={{ height: `${((activeIndex + 1) / totalItems) * 100}%` }}
    />
  );
}

export default ExperienceTimelineActive;
