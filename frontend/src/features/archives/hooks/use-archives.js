import { useEffect, useState } from "react";
import { fetchArchives } from "@/lib/api/archives-api";

function useArchives() {
  const [archives, setArchives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchArchives()
      .then((data) => {
        if (!isMounted) return;
        setArchives(data.data.archives);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(
          err.response?.data?.message || err.message || "Request failed!",
        );
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { archives, loading, error };
}

export default useArchives;
