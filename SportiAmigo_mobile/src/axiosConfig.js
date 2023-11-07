import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://edb6-85-110-36-173.ngrok-free.app', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization':  AsyncStorage.getItem('userToken') ? `Token ${AsyncStorage.getItem('userToken')}` : null,
  },


});

const setAuthToken = async()=> {
  try {
    const token = await AsyncStorage.getItem('userToken'); // Replace with your key for the token in AsyncStorage
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization']; // Clear the token if not found
    }
  } catch (error) {
    console.error('Error setting the authentication token:', error);
  }
}


const cityapi = axios.create({
  baseURL: 'https://api.countrystatecity.in/v1/countries', // Replace with your API base URL
  timeout: 5000, // Set a reasonable timeout
  headers: {
    'X-CSCAPI-KEY': '962579e1733a4ce4847976a35d27c8a8'
  }
  
});

export default axiosInstance;
export {cityapi, setAuthToken};
