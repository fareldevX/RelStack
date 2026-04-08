import { useState, useEffect } from "react";

function useDebounce(search, delay = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(search);
    }, delay);

    return () => clearTimeout(timer);
  }, [search, delay]);

  return debouncedQuery;
}

export default useDebounce;
