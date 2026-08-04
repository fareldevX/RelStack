import { useState, useRef } from "react";
import useClickOutside from "@/hooks/use-click-outside";
import { LuArrowUpRight } from "react-icons/lu";

function ArchiveCard({ archive, showDetail }) {
  const [isTilted, setIsTilted] = useState(false);
  const tiltedRef = useRef(null);

  useClickOutside(tiltedRef, () => setIsTilted(false), isTilted);

  return (
    <div className="relative perspective-[1000px] w-full">
      <h3 className="absolute left-1/2 top-25 sm:top-40 -translate-x-1/2 text-lg font-semibold text-primary dark:text-surface line-clamp-1 tracking-tight">
        {archive.project_name}
      </h3>

      <div
        ref={tiltedRef}
        onClick={() => setIsTilted(!isTilted)}
        className={`group relative flex flex-col justify-between sm:p-5 bg-surface/80 dark:bg-primary/80 border border-color-border/80 dark:border-color-dark-border/60 rounded-3xl backdrop-blur-md perspective-[1000px] origin-bottom transition-transform duration-800 ease-out hover:transform-[rotateX(50deg)] hover:-translate-y-2 ${isTilted ? "max-sm:transform-[rotateX(50deg)] hover:-translate-y-2" : ""} shadow-md overflow-hidden z-5`}
      >
        <div className="relative w-full aspect-16/10 flex items-center justify-center p-6 bg-linear-to-br from-slate-200/80 via-slate-100/50 to-slate-200/80 dark:from-slate-950 dark:via-primary dark:to-slate-950 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl overflow-hidden">
          <div className="absolute w-42 h-42 bg-sky-400/20 blur-3xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/15 blur-3xl rounded-full pointer-events-none" />

          <img
            src={archive.images[0]}
            alt={archive.project_name}
            className="relative z-10 max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
          />
        </div>

        <div className="max-sm:my-5 sm:mt-5 px-4 sm:px-1 flex flex-col justify-between grow space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary dark:text-surface tracking-tight">
              {archive.project_name}
            </h3>
            <p className="text-sm text-secondary dark:text-secondary-dark line-clamp-3 leading-relaxed">
              {archive.description}
            </p>
          </div>

          <div className="pt-3 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {archive.category}
            </div>

            <button
              onClick={() => showDetail(archive._id)}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary dark:text-slate-200 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <span>View</span>
              <LuArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveCard;
