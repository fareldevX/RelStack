import apiClient from "../http/api-client";

export async function fetchArchives() {
  const { data } = await apiClient.get("/archives");
  return data;
}

export async function fetchArchiveDetails(id) {
  const { data } = await apiClient.get(`/archives/${id}`);
  return data;
}
