import ArchiveCard from "./ArchiveCard";
import ArchivesEmpty from "./ArchivesEmpty";

function ArchiveList({ archives, onShowDetail }) {
  if (archives.length === 0) {
    return <ArchivesEmpty />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {archives.map((archive) => (
        <ArchiveCard
          key={archive.id}
          archive={archive}
          showDetail={onShowDetail}
        />
      ))}
    </div>
  );
}

export default ArchiveList;
