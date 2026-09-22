import { useActiveTimeline } from "../hooks/useActiveTimeline";
import { journey } from "../constants/experienceConstants";

import ExperienceTimelineActive from "./ExperienceTimelineActive";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceList from "./ExperienceList";

function ExperienceContent() {
  const { activeIndex, listRef } = useActiveTimeline();

  return (
    <div className="relative">
      <ExperienceTimeline />

      <ExperienceTimelineActive
        activeIndex={activeIndex}
        totalItems={journey.length}
      />

      <ExperienceList listRef={listRef} activeIndex={activeIndex} />
    </div>
  );
}

export default ExperienceContent;
