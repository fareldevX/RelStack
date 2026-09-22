import { useState, useEffect, useCallback } from "react";

export function useArchiveCarousel(imagesDetail) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    if (imagesDetail <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % imagesDetail);
  }, [imagesDetail]);

  const previous = useCallback(() => {
    if (imagesDetail <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? imagesDetail - 1 : prev - 1));
  }, [imagesDetail]);

  useEffect(() => {
    if (imagesDetail <= 1) return;

    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesDetail, next]);

  return { currentIndex, previous, next };
}
