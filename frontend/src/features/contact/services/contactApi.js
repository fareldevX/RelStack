import apiClient from "@/services/api/apiClient";

export async function submitContactForm(payload) {
  const { data } = await apiClient.post("/contact", payload);
  return data;
}
