import axios from "axios";

const baseURL: string = import.meta.env.VITE_Base_Url;

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
  withCredentials: true,
});

export default axiosInstance;
