import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Button,
  Input,
  Icon,
  Layout,
  Select,
  SelectItem,
  useTheme,
} from "@ui-kitten/components";

import {
  fetchCities,
  fetchCountries,
  fetchStates,
} from "../../../utils/GeoHelperFunc";
import { theme } from "../../themes";
import CustomAutoComplete from "../../Components/CustomAutocomplete";
// import LoadingPage from "../LoadingScreen";
import DottedProgress from "../../Components/DottedProgress ";
import LottieAnimation, { LoadingAnimation } from "../LoadingScreens/LoadingScreen1";

const RegisterStep3 = ({navigation}) => {
  const [loading, setLoading] = useState(true); // State to track loading state

  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();

  // For Autocomplete Component
  const [countries, setCountries] = useState([]); // State variable for countries
  const [states, setStates] = useState([]); // State variable for states
  const [cities, setCities] = useState([]); // State variable for cities

  const onCountrySelect = async (item) => {
    setCountry(item);
    try {
      const statesData = await fetchStates(item.iso2);
      setStates(statesData);
      } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const onStateSelect = async(item) => {
    setState(item);
    // Fetch data and update component state
    try {
        // select item and country from the sta
        const cityData = await fetchCities(country.iso2,item.iso2);
        setCities(cityData);
        console.log(cityData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
  };

  const onCitySelect = (item) => {
    setCity(item);

  };

  useEffect(() => {


    fetchCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  //
  const handleNext = () => {
    // Save the user's selected address, location, country, city, and neighborhood
    navigation.navigate("RegisterStep4", {
      country,
      state,
      city,
    });
  };


  return loading ? (
   
   <LoadingAnimation />
  ) : (
    <Layout style={styles.container}>
    {/* <EvaIconsPack /> */}
    <DottedProgress totalSteps={5} currentStep={3} />

    <Text category="h4" style={styles.title}>
      Location
    </Text>
    <Text style={styles.subtitle}>Where are you located?</Text>

   

    <CustomAutoComplete
      data={countries}
      onSelect={onCountrySelect}
      placeholder="Select your Country"
      disabled={countries.length === 0}
      style={styles.input}
      // icon="globe-outline"
    />
    <CustomAutoComplete
      data={states}
      onSelect={onStateSelect}
      placeholder="Select your State"
      disabled={states.length === 0}
      // icon="map-outline"
      style={styles.input}

    />
    <CustomAutoComplete
      data={cities}
      onSelect={onCitySelect}
      placeholder="Select your City"
      disabled={cities.length === 0}
      // icon="pin-outline"
            style={styles.input}

    />

    <Button onPress={handleNext} style={styles.button}>
      Next
    </Button>
  </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    marginBottom: theme.spacing.medium,
    color: theme.colors.placeholder, // You can change this color based on your preference
    ...theme.typography.subtitle,
  },
  input: {
    marginBottom: theme.spacing.medium,
    ...theme.input,
  },
  button: {
    marginTop: theme.spacing.medium,
    width: "90%",
    ...theme.button,
    
  },
});

export default RegisterStep3;
