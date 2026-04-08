import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    axios
      .get(url)
      .then((res) => {
        if (isMounted) {
          setProjects(res.data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(
            err.response?.data?.message || err.message || "Request Failed!"
          );
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { projects, loading, error };
}

export default useAxios;
