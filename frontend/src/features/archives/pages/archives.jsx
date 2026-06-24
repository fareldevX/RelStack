import { useState } from "react";
import Container from "@/components/ui/container";
import ArchiveCard from "@/features/archives/component/archive-card";
import useArchives from "../hooks/use-archives";
import { FaLayerGroup, FaCode, FaGraduationCap } from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";

function ArchivesSection() {
  const [category, setCategory] = useState("all");
  const [entered, setEntered] = useState(false);

  const { archives, loading, error } = useArchives();

  const handleCategory = (category) => {
    setCategory(category);
    setEntered(true);

    setTimeout(() => setEntered(false), 500);
  };

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
    <section id="projects" className="min-h-screen pt-24">
      <Container className="relative flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Portfolio Showcase
          </h2>
          <p className="max-w-140 text-center text-base text-secondary-text mb-7">
            Explore my journey through projects, and certifications. Each
            section represents a milestone in my continuous learning path
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 py-1 px-1.5 mb-12 border border-subtle rounded-full bg-navbar-bg text-secondary-text shadow-md">
          <button
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ease cursor-pointer ${category === "all" ? "bg-accent text-inverse-primary" : "hover:bg-surface hover:text-accent"}`}
            onClick={() => handleCategory("all")}
          >
            <FaLayerGroup size={16} />
          </button>
          <button
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ease cursor-pointer ${category === "Project" ? "bg-accent text-inverse-primary" : "hover:bg-surface hover:text-accent"}`}
            onClick={() => handleCategory("Project")}
          >
            <FaCode size={16} />
          </button>
          <button
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ease cursor-pointer ${category === "Certification" ? "bg-accent text-inverse-primary" : "hover:bg-surface hover:text-accent"}`}
            onClick={() => handleCategory("Certification")}
          >
            <FaGraduationCap size={16} />
          </button>
        </div>

        <div className="relative w-full flex flex-col items-start">
          <h3 className="flex items-center gap-0.5 text-sm font-semibold uppercase tracking-widest text-zinc-500 pl-4 mb-10 hover:text-accent">
            <LuChevronLeft size={18} /> {category}
          </h3>

          {filteredArchives.length === 0 ? (
            <p className="absolute top-40 left-1/2 -translate-x-1/2 text-secondary-text">
              {category} not yet available.
            </p>
          ) : (
            <div
              className={`${entered ? "translate-y-30 opacity-0" : " translate-y-0 opacity-100"} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 transition-all duration-600 ease`}
            >
              {filteredArchives.map((a) => (
                <ArchiveCard key={a._id} archive={a} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default ArchivesSection;
