import axios from 'axios';


const apiCaller = axios.create({
  baseURL: 'https://zip-mt2o.onrender.com/', // Replace with your actual base URL
});

export default apiCaller;