import apiClient from "../http/api-client";

export async function submitContactForm(payload) {
  const { data } = await apiClient.post("/contact", payload);
  return data;
}
