import { cityapi } from "../src/axiosConfig";
// Function to fetch cities based on the selected country
const fetchCountries = async (selectedCountry) => {
  try {
    const response = await cityapi.get( "");
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

// Function to fetch countries (if needed)
const fetchCities = async (country_id) => {
  // Implement the logic to fetch a list of countries
  // You can return an array of country objects with 'id' and 'name' properties.
  // Replace the URL and data structure with the appropriate values.
  try {
    const response = await cityapi.get( "/"+ country_id + '/states');
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

export { fetchCities, fetchCountries };
