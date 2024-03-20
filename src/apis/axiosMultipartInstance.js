import axios from "axios";

const axiosMultipartInstance = axios.create({
  baseURL:  "http://localhost:4007/smart_parent_api/",
  // baseURL: "http://hybrid.srishticampus.in/smart_parent_api/",

  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default axiosMultipartInstance;
