import axios from "axios";
import useLoadingStore from "../stores/loadingStore";

const axiosInstance = axios.create({
  baseURL: "https://api.thannhflong.click/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { startLoading } = useLoadingStore.getState();
    startLoading();
    return config;
  },
  (error) => {
    const { stopLoading } = useLoadingStore.getState();
    stopLoading();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { stopLoading } = useLoadingStore.getState();
    stopLoading();
    return response;
  },
  (error) => {
    const { stopLoading } = useLoadingStore.getState();
    stopLoading();
    return Promise.reject(error);
  }
);

export default axiosInstance;
