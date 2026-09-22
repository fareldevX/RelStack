import {
  LuGraduationCap,
  LuSparkles,
  LuServer,
  LuBriefcaseBusiness,
} from "react-icons/lu";

export const journey = [
  {
    id: 1,
    period: "2024 - Present",
    title: "Network & Computer Engineering",
    description:
      "Building a strong foundation in networking, Linux infrastructure, and the systems behind reliable digital products.",
    icon: LuGraduationCap,
    tag: "Education",
  },

  {
    id: 2,
    period: "2025",
    title: "Frontend Development",
    description:
      "Turning ideas into responsive interfaces with React, Tailwind CSS, and a focus on accessible, maintainable UI.",
    icon: LuSparkles,
    tag: "Craft",
  },

  {
    id: 3,
    period: "2025 - 2026",
    title: "Full-Stack Exploration",
    description:
      "Expanding from the interface to the whole product with Express.js, Bun, MongoDB, and clean code architecture.",
    icon: LuServer,
    tag: "Engineering",
  },

  {
    id: 4,
    period: "Next Chapter",
    title: "Ready to Build Together",
    description:
      "Looking for an internship or entry-level opportunity where thoughtful engineering can create a real, measurable impact.",
    icon: LuBriefcaseBusiness,
    tag: "Career",
    action: {
      label: "Start a conversation",
      href: "/contact",
    },
  },
];
