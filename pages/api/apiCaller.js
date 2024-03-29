import axios from "axios";
import Cookies from "js-cookie";

const apiCaller = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://myapp-4vz5.onrender.com/",
});

const token = Cookies.get("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

apiCaller.defaults.headers.common = headers;

export default apiCaller;
