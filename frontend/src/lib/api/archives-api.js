import apiClient from "../http/api-client";

export async function fetchArchives() {
  const { data } = await apiClient.get("/api/v1/archive");
  return data;
}

export async function fetchArchiveDetails(id) {
  const { data } = await apiClient.get(`/api/v1/archive/${id}`);
  return data;
}
