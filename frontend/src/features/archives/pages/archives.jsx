import useArchives from "../hooks/use-archives";
import { useArchivesStore } from "@/stores/useArchivesStore";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ArchiveCard from "@/features/archives/component/archive-card";
import { categories } from "@/lib/constant";

function ArchivesSection() {
  const { archives, loading, error } = useArchives();
  const { selectedCategory, setSelectedCategory } = useArchivesStore();

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
    selectedCategory === "All" ? archives : a.category === selectedCategory,
  );

  return (
    <Section id="projects" className="mt-18 scroll-m-14 sm:scroll-m-4">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-base sm:text-lg font-semibold text-primary-text uppercase tracking-wider">
              {selectedCategory === "All"
                ? selectedCategory
                : `Recent ${selectedCategory}`}
            </h2>

            <div className="flex items-center gap-2 p-1.5 sm:p-1 bg-white/70 dark:bg-slate-900/70 text-secondary-text backdrop-blur-md border border-slate-200/40 dark:border-slate-800/40 rounded-full shadow-lg transition-colors">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.value;

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat.value)}
                    title={cat.value}
                    aria-label={cat.value}
                    className={`${isActive ? "bg-accent text-white dark:text-slate-900" : "hover:text-primary-text"} p-1.5 sm:p-1 rounded-full cursor-pointer transition-colors`}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>

          {filteredArchives.length === 0 ? (
            <div className="h-[65vh] flex items-center justify-center">
              <p className="text-sm text-secondary-text">
                {selectedCategory} is not available yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredArchives.map((archive) => (
                <ArchiveCard key={archive._id} archive={archive} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default ArchivesSection;
