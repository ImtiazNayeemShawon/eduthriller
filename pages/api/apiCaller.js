import axios from 'axios';


const apiCaller = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your actual base URL
});

export default apiCaller;