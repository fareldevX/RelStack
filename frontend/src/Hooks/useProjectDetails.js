import useAxios from "./useAxios";

function useProjectDetails(id) {
  const { projects, loading, error } = useAxios(
    `https://portfolio-backend-ori-six.vercel.app/projects/${id}`
  );

  window.scrollTo({ top: 0, behavior: "smooth" });

  return { projects, loading, error };
}

export default useProjectDetails;
