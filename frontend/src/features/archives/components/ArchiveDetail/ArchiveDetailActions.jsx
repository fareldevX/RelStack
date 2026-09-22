import { FiGithub, FiExternalLink } from "react-icons/fi";

function ArchiveDetailActions({ archive }) {
  return (
    <div className="pt-6 mt-6 border-t border-color-border/60 dark:border-color-dark-border/60 flex flex-wrap items-center gap-3">
      {archive.github_url && (
        <a
          href={archive.github_url}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
        >
          <FiGithub size={18} />
          <span>Github</span>
        </a>
      )}

      {archive.demo_url && (
        <a
          href={archive.demo_url}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
        >
          <FiExternalLink size={18} />
          <span>Demo</span>
        </a>
      )}

      {archive.credential_url && (
        <a
          href={archive.credential_url}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
        >
          <FiExternalLink size={18} />
          <span>View Credential</span>
        </a>
      )}
    </div>
  );
}

export default ArchiveDetailActions;
