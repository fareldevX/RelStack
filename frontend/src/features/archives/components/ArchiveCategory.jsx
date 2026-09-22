import { categories } from "../constants/archiveConstants";

function ArchiveCategory({ selectedType, onChange }) {
  return (
    <div className="flex items-center gap-2 p-1.5 sm:p-1 bg-surface/70 dark:bg-primary/70 text-secondary backdrop-blur-md border border-color-border/60 dark:border-color-dark-border/60 rounded-full shadow-md transition-colors">
      {categories.map((cat, idx) => {
        const Icon = cat.icon;
        const isActive = selectedType === cat.value;

        return (
          <button
            key={idx}
            onClick={() => onChange(cat.value)}
            title={cat.value}
            aria-label={cat.value}
            className={`${isActive ? "bg-primary dark:bg-surface text-surface dark:text-primary" : "hover:text-primary dark:hover:text-surface"} p-1.5 sm:p-1 rounded-full cursor-pointer transition-colors`}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}

export default ArchiveCategory;
