import ArchiveDetailOverlay from "./ArchiveDetailOverlay";
import ArchiveDetailHeader from "./ArchiveDetailHeader";
import ArchiveDetailImage from "./ArchiveDetailImage";
import ArchiveDetailContent from "./ArchiveDetailContent";
import ArchiveDetailCertification from "./ArchiveDetailCertification";
import ArchiveDetailActions from "./ArchiveDetailActions";

function ArchiveDetail({ archive, onClose }) {
  return (
    <>
      <ArchiveDetailOverlay onClose={onClose} />

      <div className="fixed top-0 right-0 w-full sm:w-105 md:w-112.5 h-screen bg-surface/80 dark:bg-primary/80 backdrop-blur-xl border-l border-color-border/60 dark:border-color-dark-border/60 shadow-2xl flex flex-col justify-between z-50">
        <div className="flex-1 min-h-0 overflow-y-auto p-6">
          <ArchiveDetailHeader archive={archive} onClose={onClose} />

          <ArchiveDetailImage images={archive.images} alt={archive.name} />

          <ArchiveDetailContent archive={archive} />

          {archive.type === "certification" && (
            <ArchiveDetailCertification archive={archive} />
          )}

          <ArchiveDetailActions archive={archive} />
        </div>
      </div>
    </>
  );
}

export default ArchiveDetail;
