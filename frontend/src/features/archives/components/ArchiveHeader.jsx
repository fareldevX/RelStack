import ArchiveCategory from "./ArchiveCategory";

function ArchiveHeader({ selectedType, onChange }) {
  return (
    <div className="flex flex-col items-center mb-8 px-4">
      <div className="mb-6 flex flex-col items-center text-center gap-3 sm:mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Selected work
        </p>

        <h2 className="font-portfolio text-3xl font-bold text-primary dark:text-surface sm:text-5xl capitalize">
          {selectedType}s
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-secondary dark:text-secondary-dark">
          Explore projects I have built and certifications I have earned along
          the way.
        </p>
      </div>

      <ArchiveCategory selectedType={selectedType} onChange={onChange} />
    </div>
  );
}

export default ArchiveHeader;
