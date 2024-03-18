import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4007/smart_parent_api/",
  // baseURL: "http://hybrid.srishticampus.in/smart_parent_api/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
