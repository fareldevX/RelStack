import { useEffect, useState } from "react";
import { fetchArchiveDetails } from "@/lib/api/archives-api";

function useArchiveDetails(id) {
  const [archive, setArchive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    fetchArchiveDetails(id)
      .then((data) => {
        if (!isMounted) return;
        setArchive(data.data.archives);
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
  }, [id]);

  return { archive, loading, error };
}

export default useArchiveDetails;
