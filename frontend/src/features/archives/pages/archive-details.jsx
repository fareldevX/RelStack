import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import {
  FiArrowLeft,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import useArchiveDetails from "../hooks/use-archive-details";

function ArchiveDetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id } = useParams();
  const { archive, loading, error } = useArchiveDetails(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openLightBox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % archive.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + archive.images.length) % archive.images.length,
    );
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="loading-ring mb-8" />
        <p className="loading-text">Loading projects...</p>
      </div>
    );
  }

  if (!archive) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary-text">Archive not found.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary-text">
          Something Went Wrong. Please Try Again.
        </p>
      </div>
    );
  }

  return (
    <Section className="min-h-screen p-4">
      <Container className="rounded-2xl mt-12 px-8 border border-subtle bg-surface p-[clamp(1.5rem,2.5vw,2.4rem)] shadow-xl">
        <div className="mb-8 flex items-center gap-4">
          <Link to="/" state={{ scrollTo: "projects" }}>
            <span className="flex cursor-pointer items-center text-gray-600 hover:text-accent transition">
              <FiArrowLeft size={22} />
            </span>
          </Link>
          <h2 className="text-[1.3rem] font-bold text-accent">
            {archive.project_name}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
          <div className="flex flex-col gap-6">
            <button
              className="border border-semibold p-2 bg-section rounded-2xl overflow-hidden cursor-pointer shadow-md"
              onClick={() => openLightBox(0)}
            >
              <img
                src={archive.images[0]}
                alt={archive.project_name}
                className="w-full rounded-xl object-cover scale-100 hover:scale-101 transition-transform duration-300 ease"
              />
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {archive.images.slice(1, 4).map((image, index) => (
                <div
                  key={index}
                  className="border border-semibold p-1 bg-section rounded-lg overflow-hidden cursor-pointer shadow-md"
                  onClick={() => openLightBox(index + 1)}
                >
                  <img
                    src={image}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-auto rounded object-cover scale-100 hover:scale-105 transition-transform duration-300 ease"
                  />
                </div>
              ))}
              {archive.images.length > 4 && (
                <div
                  className="w-full flex items-center justify-center text-xs font-medium text-secondary-text border border-semibold p-1 bg-section rounded-lg overflow-hidden cursor-pointer shadow-md hover:bg-accent hover:text-inverse-primary transition-colors duration-500 ease"
                  onClick={() => openLightBox(4)}
                >
                  {archive.images.length - 4}+ View More
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-[1.2rem] font-semibold text-accent">
              About this project
            </h3>
            <p className="mb-4.5 text-[0.75rem} leading-[clamp(1.6,2.5vw,1.7)] text-secondary-text">
              {archive.description}
            </p>

            <h4 className="mb-2 text-[1.2rem] font-semibold text-accent">
              Tech Stack
            </h4>
            <div className="mb-8.5 flex flex-wrap gap-2">
              {archive.tech_stack.map((stack, index) => (
                <span
                  key={index}
                  className="rounded-[14px] bg-accent px-3 py-[clamp(0.1rem,1vw,0.3rem)] text-xs font-semibold text-inverse-primary transition-colors duration-200 hover:bg-accent/80"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="mb-6 flex gap-[clamp(0.6rem,1vw,0.8rem)]">
              <Button
                variant="primary"
                size="md"
                className="flex items-center gap-[clamp(0.4rem,1vw,0.8rem)]"
                onClick={() => window.open(archive.github, "_blank")}
              >
                <FaGithub size={20} />
                <span className="text-[clamp(0.8rem,1vw,0.9rem)]">
                  View on GitHub
                </span>
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="flex items-center gap-[clamp(0.4rem,1vw,0.8rem)]"
                onClick={() => window.open(archive.demo, "_blank")}
              >
                <FiExternalLink size={20} />
                <span className="text-[clamp(0.8rem,1vw,0.9rem)]">
                  Live Demo
                </span>
              </Button>
            </div>

            <span className="text-sm text-secondary-text font-mono">
              Created At:{" "}
              {new Date(archive.createdAt).toLocaleString("en-US", {
                timeZone: "UTC",
              })}
            </span>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div
          className="fixed inset-0 z-900 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-inverse-primary hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={40} />
          </button>

          <button
            className="absolute left-4 p-3 rounded-full bg-white/10 text-inverse-primary hover:bg-accent transition-all"
            onClick={prevImage}
          >
            <FiChevronLeft size={30} />
          </button>

          <div className="max-w-[90%] max-h-[85vh] select-none">
            <img
              src={archive.images[currentIndex]}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <p className="text-inverse-primary text-center mt-4 font-medium">
              {currentIndex + 1} / {archive.images.length}
            </p>
          </div>

          <button
            className="absolute right-4 p-3 rounded-full bg-white/10 text-inverse-primary hover:bg-accent transition-all"
            onClick={nextImage}
          >
            <FiChevronRight size={30} />
          </button>
        </div>
      )}
    </Section>
  );
}

export default ArchiveDetailsPage;
