import apiClient from "@/services/api/apiClient";

export async function fetchArchives() {
  const { data } = await apiClient.get("/archive");
  return data;
}

export async function fetchArchiveDetails(id) {
  const { data } = await apiClient.get(`/archive/${id}`);
  return data;
}
