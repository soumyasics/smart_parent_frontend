import axios from "axios";

const axiosMultipartInstance = axios.create({
  baseURL:  "http://localhost:4009/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export default axiosMultipartInstance;
