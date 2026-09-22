function AboutSkillSquare({ skillIcon }) {
  const Icon = skillIcon;

  return (
    <div className="w-14 h-14 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500">
      <Icon size={32} />
    </div>
  );
}

export default AboutSkillSquare;
