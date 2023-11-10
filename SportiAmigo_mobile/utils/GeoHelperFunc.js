import { cityapi } from "../src/axiosConfig";
// Function to fetch cities based on the selected country
const fetchCountries = async () => {
  try {
    const response = await cityapi.get( );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error('Failed to fetch countries');
    }
  } catch (error) {
    throw error;
  }
};





const fetchStates = async (county_iso2) => {
  try {
    const response = await cityapi.get( "/" + county_iso2 +"/states/");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch countries');
    }
  } catch (error) {
    throw error;
  }
};



const fetchCities = async (county_iso2,state_iso2) => {
  try {
    const response = await cityapi.get("/"+county_iso2 +"/states/" + state_iso2 +"/cities/");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch countries');
    }
  } catch (error) {
    throw error;
  }
}



export {fetchCities,fetchStates, fetchCountries };
