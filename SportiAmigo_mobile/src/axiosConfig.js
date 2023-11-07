import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://1e43-78-174-214-226.ngrok-free.app', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
});



const cityapi = axios.create({
  baseURL: 'https://api.countrystatecity.in/v1/countries', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
  headers: {
    'X-CSCAPI-KEY': '962579e1733a4ce4847976a35d27c8a8'
  }
  
});

export default axiosInstance;
export {cityapi};