import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rel-stack-api.vercel.app",
  timeout: 15000,
});

export default apiClient;
