function ArchivesEmpty({ type }) {
  return (
    <div className="h-[65vh] flex items-center justify-center">
      <p className="text-sm text-secondary dark:text-secondary-dark">
        {type ? `${type}s is not available yet.` : "No archives available yet."}
      </p>
    </div>
  );
}

export default ArchivesEmpty;
