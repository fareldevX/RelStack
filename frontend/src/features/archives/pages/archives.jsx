import { useState, useEffect, useCallback } from "react";
import useArchives from "../hooks/use-archives";
import { useArchivesStore } from "@/stores/useArchivesStore";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ArchiveCard from "@/features/archives/component/archive-card";
import { categories } from "@/lib/constant";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function ArchivesSection() {
  const { archives, loading, error } = useArchives();
  const { selectedType, setSelectedType } = useArchivesStore();

  const [isShowDetail, setIsShowDetail] = useState(false);
  const [archiveDetail, setArchiveDetail] = useState(null);
  const [countRecentImage, setCountRecentImage] = useState(0);

  const images = archiveDetail?.images || [];
  const totalImageDetail = images.length;
  const isCertification = archiveDetail?.type === "certification";
  const detailTitle = isCertification
    ? "Certification Details"
    : "Project Details";

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const issuedDate = formatDate(archiveDetail?.issued_date);
  const expiryDate = formatDate(archiveDetail?.expiry_date);

  const handleNextImage = useCallback(() => {
    if (totalImageDetail <= 1) return;
    setCountRecentImage((prev) => (prev + 1) % totalImageDetail);
  }, [totalImageDetail]);

  const handlePrevImage = useCallback(() => {
    if (totalImageDetail <= 1) return;
    setCountRecentImage((prev) =>
      prev === 0 ? totalImageDetail - 1 : prev - 1,
    );
  }, [totalImageDetail]);

  useEffect(() => {
    if (!isShowDetail || totalImageDetail <= 1) return;

    const timer = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, [isShowDetail, totalImageDetail, handleNextImage]);

  const handleShowDetail = (id) => {
    if (!id) return;
    const archive = archives.find((archive) => archive._id === id);
    setArchiveDetail(archive);
    setCountRecentImage(0);
    setIsShowDetail(true);
  };

  const handleCloseDetail = () => {
    setArchiveDetail(null);
    setCountRecentImage(0);
    setIsShowDetail(false);
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="loading-ring mb-8" />
        <p className="loading-text">Loading projects...</p>
      </div>
    );
  }

  if (error || !archives) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary dark:text-secondary-dark">
          {error
            ? "Something Went Wrong. Please Try Again."
            : "Archives not yet available."}
        </p>
      </div>
    );
  }

  const filteredArchives = archives.filter((a) => a.type === selectedType);

  return (
    <Section id="archives" className="mt-18 max-sm:scroll-m-14">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface uppercase tracking-wider">
              {selectedType}s
            </h2>

            <div className="flex items-center gap-2 p-1.5 sm:p-1 bg-surface/70 dark:bg-primary/70 text-secondary backdrop-blur-md border border-color-border/60 dark:border-color-dark-border/60 rounded-full shadow-lg transition-colors">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = selectedType === cat.value;

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedType(cat.value)}
                    title={cat.value}
                    aria-label={cat.value}
                    className={`${isActive ? "bg-primary dark:bg-surface text-surface dark:text-primary" : "hover:text-primary dark:hover:text-surface"} p-1.5 sm:p-1 rounded-full cursor-pointer transition-colors`}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>

          {filteredArchives.length === 0 ? (
            <div className="h-[65vh] flex items-center justify-center">
              <p className="text-sm text-secondary dark:text-secondary-dark">
                {selectedType}s is not available yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredArchives.map((archive) => (
                <ArchiveCard
                  key={archive._id}
                  archive={archive}
                  showDetail={handleShowDetail}
                />
              ))}
            </div>
          )}
        </div>
      </Container>

      {isShowDetail && archiveDetail && (
        <>
          <div
            onClick={handleCloseDetail}
            className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 transition-opacity duration-300"
          />

          <div className="fixed top-0 right-0 w-full sm:w-105 md:w-112.5 h-screen bg-surface/80 dark:bg-primary/80 backdrop-blur-xl border-l border-color-border/60 dark:border-color-dark-border/60 shadow-2xl flex flex-col justify-between z-50">
            <div className="flex-1 min-h-0 overflow-y-auto p-6">
              <div className="flex items-center justify-between pb-2 border-b border-color-border/60 dark:border-color-dark-border/60">
                <span className="text-xs font-semibold tracking-wider text-primary dark:text-surface uppercase">
                  {detailTitle}
                </span>
                <button
                  onClick={handleCloseDetail}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-primary dark:hover:text-slate-100 transition-colors cursor-pointer"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-color-border/60 dark:border-color-dark-border/60 flex items-center justify-center p-4">
                {totalImageDetail > 1 && (
                  <span className="absolute top-2.5 left-4 text-[11px] font-medium px-2 py-0.5 bg-surface/60 dark:bg-primary/60 text-primary dark:text-surface rounded-full backdrop-blur-xs z-10">
                    {countRecentImage + 1} / {totalImageDetail}
                  </span>
                )}

                {totalImageDetail > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-surface/80 dark:bg-primary/80 hover:bg-surface dark:hover:bg-primary text-slate-700 dark:text-slate-400 rounded-full shadow-md z-10 cursor-pointer transition-all"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={18} />
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-surface/80 dark:bg-primary/80 hover:bg-surface dark:hover:bg-primary text-slate-700 dark:text-slate-400 rounded-full shadow-md z-10 cursor-pointer transition-all"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={18} />
                    </button>
                  </>
                )}

                <img
                  src={archiveDetail.images[countRecentImage]}
                  alt={archiveDetail.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-surface tracking-tight">
                    {archiveDetail.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary dark:text-secondary-dark leading-relaxed">
                    {archiveDetail.description}
                  </p>
                </div>

                {archiveDetail.tech_stack.length !== 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {archiveDetail.tech_stack &&
                        archiveDetail.tech_stack.map((stc, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-primary dark:text-surface border border-color-border/60 dark:border-color-dark-border/60 rounded-full"
                          >
                            {stc}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                {isCertification && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Certification Info
                    </h4>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-color-border/60 dark:border-color-dark-border/60 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          Issued
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary dark:text-surface">
                          {issuedDate}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-color-border/60 dark:border-color-dark-border/60 p-3">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          Expiry
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary dark:text-surface">
                          {expiryDate}
                        </p>
                      </div>
                      <div
                        className={`${!archiveDetail.credential_id && "sm:col-span-2"} rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-color-border/60 dark:border-color-dark-border/60 p-3`}
                      >
                        <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          Issuer
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary dark:text-surface">
                          {archiveDetail.issuer || "Unknown issuer"}
                        </p>
                      </div>
                      {archiveDetail.credential_id && (
                        <div className="rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-color-border/60 dark:border-color-dark-border/60 p-3">
                          <p className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            ID Credential
                          </p>
                          <p className="mt-1 text-sm font-medium text-primary dark:text-surface">
                            {archiveDetail.credential_id}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {archiveDetail.github_url && archiveDetail.demo_url && (
                <div className="pt-6 mt-6 border-t border-color-border/60 dark:border-color-dark-border/60 flex items-center gap-3">
                  <a
                    href={archiveDetail.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <FiGithub size={18} />
                    <span>Github</span>
                  </a>

                  <a
                    href={archiveDetail.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              )}

              {archiveDetail.credential_url && (
                <div className="pt-6 mt-6 border-t border-color-border/60 dark:border-color-dark-border/60 flex items-center">
                  <a
                    href={archiveDetail.credential_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 bg-primary dark:bg-surface text-surface dark:text-primary rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <FiExternalLink size={18} />
                    <span>View Credential</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Section>
  );
}

export default ArchivesSection;
