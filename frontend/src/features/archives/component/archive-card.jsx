import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ArchiveCard({ archive }) {
  return (
    <div className="group relative w-full rounded-3xl border border-subtle bg-surface p-2 hover:shadow-xl transition-shadow duration-300 ease overflow-hidden">
      <img
        src={archive.images[0]}
        alt={archive.project_name}
        className="w-full rounded-xl object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease"
      />

      <div className="absolute bottom-0 left-0 right-0 h-0 opacity-0 bg-black/20 group-hover:h-100 group-hover:opacity-100 transition-all duration-600 ease"></div>

      <h3 className="absolute bottom-0 left-0 translate-y-full translate-x-4 truncate text-[1rem] font-bold text-inverse-primary group-hover:-translate-y-5 transition-transform duration-500 ease">
        {archive.project_name}
      </h3>

      <Link
        to={`/projects/${archive._id}`}
        className="absolute bottom-0 right-0 translate-y-full -translate-x-4 rotate-180 mt-4 flex w-max items-center gap-1.5 rounded-full p-3 text-[clamp(0.8rem,1.5vw,0.9rem)] font-medium text-inverse-primary border border-inverse hover:gap-3 hover:bg-chip-secondary hover:text-chip-secondary-text group-hover:-translate-y-4 group-hover:rotate-360 transition-transform duration-600 ease"
      >
        <FiArrowRight size={16} />
      </Link>
    </div>
  );
}

export default ArchiveCard;
