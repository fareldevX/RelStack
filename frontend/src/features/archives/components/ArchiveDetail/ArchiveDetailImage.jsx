import { useArchiveCarousel } from "../../hooks/useArchiveCarousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ArchiveDetailImage({ images, alt }) {
  const imagesDetail = images.length;

  const { currentIndex, previous, next } = useArchiveCarousel(imagesDetail);

  return (
    <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-color-border/60 dark:border-color-dark-border/60 flex items-center justify-center p-4 mb-6">
      {imagesDetail > 1 && (
        <span className="absolute top-2.5 left-4 text-[11px] font-medium px-2 py-0.5 bg-surface/60 dark:bg-primary/60 text-primary dark:text-surface rounded-full backdrop-blur-xs z-10">
          {currentIndex + 1} / {imagesDetail}
        </span>
      )}

      {imagesDetail > 1 && (
        <>
          <button
            onClick={previous}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-surface/80 dark:bg-primary/80 hover:bg-surface dark:hover:bg-primary text-slate-700 dark:text-slate-400 rounded-full shadow-md z-10 cursor-pointer transition-all"
            aria-label="Previous image"
          >
            <FiChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-surface/80 dark:bg-primary/80 hover:bg-surface dark:hover:bg-primary text-slate-700 dark:text-slate-400 rounded-full shadow-md z-10 cursor-pointer transition-all"
            aria-label="Next image"
          >
            <FiChevronRight size={18} />
          </button>
        </>
      )}

      <img
        src={images[currentIndex]}
        alt={alt}
        className="max-h-full max-w-full object-contain drop-shadow-md"
      />
    </div>
  );
}

export default ArchiveDetailImage;
