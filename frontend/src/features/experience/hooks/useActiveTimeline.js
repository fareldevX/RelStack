import { useEffect, useRef, useState } from "react";

export function useActiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("[data-experience-index]");

    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(second.boundingClientRect.top - window.innerHeight / 2),
          )[0];

        if (visibleEntry) {
          setActiveIndex(Number(visibleEntry.target.dataset.experienceIndex));
        }
      },
      {
        rootMargin: "-38% 0px -38% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return { activeIndex, listRef };
}
