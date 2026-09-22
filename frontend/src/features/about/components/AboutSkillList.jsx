import { skills } from "../constants/aboutConstants";
import AboutSkillSquare from "./AboutSkillSquare";

function AboutSkillList() {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
      {skills.map((skill, index) => (
        <AboutSkillSquare key={index} skillIcon={skill} />
      ))}
    </div>
  );
}

export default AboutSkillList;
