import apiClient from "../http/api-client";

export async function submitContactForm(payload) {
  const { data } = await apiClient.post("/api/v1/contact", payload);
  return data;
}
