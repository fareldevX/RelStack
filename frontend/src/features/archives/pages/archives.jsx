import { useState } from "react";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ArchiveCard from "@/features/archives/component/archive-card";
import useArchives from "../hooks/use-archives";
// import { FaLayerGroup, FaCode, FaGraduationCap } from "react-icons/fa";
// import { LuChevronLeft } from "react-icons/lu";

function ArchivesSection() {
  const [category, setCategory] = useState("all");
  // const [entered, setEntered] = useState(false);

  const { archives, loading, error } = useArchives();

  // const handleCategory = (category) => {
  //   setCategory(category);
  //   setEntered(true);

  //   setTimeout(() => setEntered(false), 500);
  // };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="loading-ring mb-8" />
        <p className="loading-text">Loading projects...</p>
      </div>
    );
  }

  if (!archives) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary-text">Archives not yet available.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary-text">
          Something Went Wrong. Please Try Again.
        </p>
      </div>
    );
  }

  const filteredArchives = archives.filter((a) =>
    category === "all" ? archives : a.category === category,
  );

  return (
    <Section id="projects" className="mt-18">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-primary-text uppercase tracking-wider text-center mb-12">
            Recent Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredArchives.map((archive) => (
              <ArchiveCard key={archive._id} archive={archive} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ArchivesSection;
