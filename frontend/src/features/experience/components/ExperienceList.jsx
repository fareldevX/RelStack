import { journey } from "../constants/experienceConstants";

import ExperienceCard from "./ExperienceCard";

function ExperienceList({ listRef, activeIndex }) {
  return (
    <div ref={listRef} className="space-y-12 md:space-y-20">
      {journey.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          index={index}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
}

export default ExperienceList;
