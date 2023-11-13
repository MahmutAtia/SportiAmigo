import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input, Layout, Icon, useTheme, useStyleSheet, StyleService } from "@ui-kitten/components";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { theme } from "../../themes";
import DottedProgress from "../../Components/DottedProgress ";
import axios from "axios";
import axiosInstance from "../../axiosConfig";
import LottieAnimation, { LoadingAnimation } from "../LoadingScreens/LoadingScreen1";

const RegisterStep4 = ({ navigation, route }) => {

  const [loading, setLoading] = useState(true); // State to track loading state


  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);


  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(null);

  const { country, state, city } = route.params;


  const getAddressFromCoordinates = async (lat, lng) => {
    // Use the OpenCage Geocoding API to get address details
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=962579e1733a4ce4847976a35d27c8a8`
      );
  
      const data = response.data; // Use response.data instead of response.json()
  
      if (data.results && data.results.length > 0) {
        // set the address
        const { lng, lat } = data.results[0].geometry;
  
        // set the location
        setLocation({
          latitude: lat,
          longitude: lng,
        });
        // set the address
        setAddress(data.results[0].formatted);

        
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
    }
  };
  
  const handleMarkerDragEnd = async (e) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };

    getAddressFromCoordinates( newLocation.latitude, newLocation.longitude)
      
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Location permission denied");
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
          const latitude = currentLocation.coords.latitude;
          const  longitude = currentLocation.coords.longitude;

        console.log(latitude, longitude);
        getAddressFromCoordinates(latitude, longitude);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };

    requestLocationPermission();
  }, []);

  const handleNext = () => {
    // Save the user's selected address, location, country, city, and neighborhood
     
    axiosInstance.put("/api/userauth/profile/", {
      country: country.name,
      state: state.name,
      city: city.name,
      location_address: address,
      location_latitude: location.latitude,
      location_longitude: location.longitude,
    }).then((response) => {
      console.log(response.status);
      console.log(response.data);
      if (response.status === 200) {
        // Registration was successful
        navigation.navigate("RegisterStep5"); // Navigate to the next registration step
      } else {
        // Handle other error cases
        alert(
          "An error occurred while authenticating. Please try again later."
        );
      }
    }).catch((error) => {
      // Handle network or other errors
      // Handle network errors and other unexpected issues
      console.error(error);
      alert(
        "An error occurred while authenticating. Please try again later."
      );
    });


   
  };
  console.log(address);
  console.log(loading);
  console.log(location)

  return loading ? <LoadingAnimation/>: (
    <Layout style={styles.container}>

<DottedProgress totalSteps={5} currentStep={4} />

      <Text category="h4" style={styles.title}>
        Location
      
      </Text>

      <Text style={styles.subtitle}>Where are you located?</Text>
      <Input
        label="Address"
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          //specify our coordinates.
          latitude: 39.9334,
          longitude: 32.8597,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            onDragEnd={handleMarkerDragEnd}
            draggable
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Selected Location"
            description="Your address"
          />
        )}
      </MapView>
      <Button onPress={()=>navigation.goBack()} style={styles.button}>
      Back
      </Button>
      <Button onPress={handleNext} style={styles.button}>
        Next
      </Button>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ["background-basic-color-1"],
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: theme.spacing.medium,
  },
  title: {
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    marginBottom: theme.spacing.medium,
    color:  "color-basic-600", // You can change this color based on your preference
  },
  input: {
    marginBottom: theme.spacing.medium,
  },
  map: {
    height: "50%",
    width: "100%",
    marginBottom: theme.spacing.medium,
  },
  button: {
    borderRadius: 8,
    width: "100%",
    marginBottom: theme.spacing.medium,
  },
});

export default RegisterStep4;