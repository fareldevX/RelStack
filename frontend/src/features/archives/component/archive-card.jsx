import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ArchiveCard({ archive }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 3000)}
      data-touched={isTouched}
      className="group relative w-full rounded-3xl border border-subtle bg-surface p-2 hover:shadow-xl transition-shadow duration-300 ease overflow-hidden select-none cursor-pointer"
    >
      <img
        src={archive.images[0]}
        alt={archive.project_name}
        className="w-full rounded-xl object-cover scale-100 group-hover:scale-105 group-data-[touched=true]:scale-105 transition-transform duration-500 ease"
      />

      <div className="absolute bottom-0 left-0 right-0 h-0 opacity-0 bg-black/40 group-hover:h-full group-hover:opacity-100 group-data-[touched=true]:h-full group-data-[touched=true]:opacity-100 transition-all duration-500 ease"></div>

      <h3 className="absolute bottom-4 left-4 z-10 translate-y-10 opacity-0 truncate text-[1rem] font-bold text-white group-hover:translate-y-0 group-hover:opacity-100 group-data-[touched=true]:translate-y-0 group-data-[touched=true]:opacity-100 transition-all duration-500 ease">
        {archive.project_name}
      </h3>

      <Link
        to={`/projects/${archive._id}`}
        className="absolute bottom-2 right-4 z-10 translate-y-10 opacity-0 flex w-max items-center gap-1.5 rounded-full bg-white p-3 text-[0.9rem] font-medium text-black hover:gap-3 group-hover:translate-y-0 group-hover:opacity-100 group-data-[touched=true]:translate-y-0 group-data-[touched=true]:opacity-100 transition-all duration-500 ease"
      >
        <FiArrowRight size={16} />
      </Link>
    </div>
  );
}

export default ArchiveCard;
