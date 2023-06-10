import axios from 'axios';
import Cookies from 'js-cookie';

const apiCaller = axios.create({
  baseURL: 'https://myapp-4vz5.onrender.com', // Replace with your actual base URL
});

const token = Cookies.get("token"); // Get the access token from the 'token' cookie
const headers = {
  Authorization: `Bearer ${token}`,
};

apiCaller.defaults.headers.common = headers;

export default apiCaller;
