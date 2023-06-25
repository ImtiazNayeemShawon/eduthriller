import axios from "axios";
import Cookies from "js-cookie";

const apiCaller = axios.create({
    //  baseURL: 'https://myapp-4vz5.onrender.com'
      baseURL: "http://localhost:7000",
});

const token = Cookies.get("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

apiCaller.defaults.headers.common = headers;

export default apiCaller;
