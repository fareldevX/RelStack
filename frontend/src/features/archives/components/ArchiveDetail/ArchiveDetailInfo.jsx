function ArchiveDetailInfo({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-color-border/60 dark:border-color-dark-border/60 p-3">
      <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-primary dark:text-surface">
        {value}
      </p>
    </div>
  );
}

export default ArchiveDetailInfo;
