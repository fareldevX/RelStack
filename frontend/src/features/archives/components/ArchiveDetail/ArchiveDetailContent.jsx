import ArchiveCategory from "../ArchiveCategory";

function ArchiveDetailContent({ archive }) {
  return (
    <div className="space-y-6 mb-4">
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-surface tracking-tight">
          {archive.name}
        </h3>
        <p className="text-xs sm:text-sm text-secondary dark:text-secondary-dark leading-relaxed">
          {archive.description}
        </p>
      </div>

      {archive.tech_stack && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Technologies
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {archive.tech_stack &&
              archive.tech_stack.map((stc, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-primary dark:text-surface border border-color-border/60 dark:border-color-dark-border/60 rounded-full"
                >
                  {stc}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArchiveDetailContent;
