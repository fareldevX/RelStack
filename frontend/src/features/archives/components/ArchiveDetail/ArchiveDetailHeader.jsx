import { FiX } from "react-icons/fi";

function ArchiveDetailHeader({ archive, onClose }) {
  return (
    <div className="flex items-center justify-between pb-2 border-b border-color-border/60 dark:border-color-dark-border/60">
      <span className="text-xs font-semibold tracking-wider text-primary dark:text-surface uppercase">
        {archive.type === "certification"
          ? "Certification Details"
          : "Project Details"}
      </span>
      <button
        onClick={onClose}
        className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-primary dark:hover:text-slate-100 transition-colors cursor-pointer"
      >
        <FiX size={20} />
      </button>
    </div>
  );
}

export default ArchiveDetailHeader;
