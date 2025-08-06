import axios from "axios";
import { toast } from "react-toastify";
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const axiosInstance = axios.create({});
export const axiosInstance = axios.create({
  baseURL: BASE_URL, // ✅ set your base URL here
});

// ✅ Use localStorage instead of Redux store
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ✅ Avoid store dispatch – let consuming code handle logout
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // Optionally clear token here
      localStorage.removeItem("userToken");
      // window.location.href = "/";
    }
    toast.error(error?.response?.data?.message || "Something went wrong");  
    return Promise.reject(error?.response?.data?.message || error.message);
  }
);

interface ApiConnectorConfig {
  method: string;
  url: string;
  bodyData?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

export const apiConnector = ({
  method,
  url,
  bodyData,
  headers,
  params,}: ApiConnectorConfig) => axiosInstance({
    method,
    url,
    data: bodyData || null,
    headers: headers || undefined,
    params: params || undefined,
  });
