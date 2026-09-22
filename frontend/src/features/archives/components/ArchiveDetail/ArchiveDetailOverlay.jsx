function ArchiveDetailOverlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 transition-opacity duration-300"
    />
  );
}

export default ArchiveDetailOverlay;
