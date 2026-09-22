import { useState } from "react";

export function useArchiveDetail(archives) {
  const [selectedArchive, setSelectedArchive] = useState(null);

  const openDetail = (id) => {
    if (!id) return;
    const archive = archives.find((archive) => archive.id === id);
    setSelectedArchive(archive);
  };

  const closeDetail = () => {
    setSelectedArchive(null);
  };

  return { selectedArchive, openDetail, closeDetail };
}
