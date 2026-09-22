import { archivesStore } from "@/stores/archivesStore";
import { useArchiveDetail } from "../hooks/useArchiveDetail";
import useArchives from "../hooks/useArchives";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ArchiveHeader from "./ArchiveHeader";
import ArchiveList from "./ArchiveList";
import ArchiveDetail from "./ArchiveDetail/ArchiveDetail";
import ArchivesLoading from "./ArchivesLoading";
import ArchivesError from "./ArchivesError";

function ArchivesSection() {
  const { archives, loading, error } = useArchives();

  const { selectedType, setSelectedType } = archivesStore();

  const { selectedArchive, openDetail, closeDetail } =
    useArchiveDetail(archives);

  const filteredArchives = archives.filter(
    (archive) => archive.type === selectedType,
  );

  if (loading) {
    return <ArchivesLoading />;
  }

  if (error || !archives) {
    return <ArchivesError />;
  }

  return (
    <Section id="archives" className="mt-18 max-sm:scroll-m-14">
      <Container>
        <div className="max-w-5xl mx-auto">
          <ArchiveHeader
            selectedType={selectedType}
            onChange={setSelectedType}
          />

          <ArchiveList archives={filteredArchives} onShowDetail={openDetail} />
        </div>
      </Container>

      {selectedArchive && (
        <ArchiveDetail archive={selectedArchive} onClose={closeDetail} />
      )}
    </Section>
  );
}

export default ArchivesSection;
