import useAxios from "./useAxios";

function useProjects() {
  const { projects, loading, error } = useAxios(
    "https://portfolio-backend-ori-six.vercel.app/projects"
  );

  return { projects, loading, error };
}

export default useProjects;
