import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://9872-85-110-36-173.ngrok-free.app', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
});


export default axiosInstance;