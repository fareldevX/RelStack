import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://relstack-api.vercel.app",
  timeout: 15000,
});

export default apiClient;
