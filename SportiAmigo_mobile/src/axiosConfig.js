import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import store from "./app/store";

const get_token = () => {
  const { auth } = store.getState();
  console.log(auth.userToken);
  return auth.userToken;
};

const axiosInstance = axios.create({
  baseURL: "https://6570-78-174-213-88.ngrok-free.app", // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  // Get the token synchronously and set it in the headers
  const token = get_token();
  console.log(token);
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default axiosInstance;

const cityapi = axios.create({
  baseURL: "https://api.countrystatecity.in/v1/countries", // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
  headers: {
    "X-CSCAPI-KEY": "ZklYd0oxZEVVRGtlRzNDMEtSYVVZcjJpUGVuc1htVnBNc25qTXhLUg==",
  },
});

export { cityapi };
