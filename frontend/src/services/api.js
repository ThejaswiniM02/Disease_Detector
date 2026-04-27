import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
  timeout: 80000,
  headers: { "Content-Type": "application/json" }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response?.data?.message || "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  }
);

export const predictHeart = (data) => api.post("/predict/heart", data);
export const predictDiabetes = (data) => api.post("/predict/diabetes", data);
export const sendChatMessage = (message) => api.post("/chat", { message });