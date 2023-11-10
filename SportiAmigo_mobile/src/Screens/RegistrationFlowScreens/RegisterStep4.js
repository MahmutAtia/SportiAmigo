import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input, Layout } from '@ui-kitten/components';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { theme } from '../../themes';
import CustomAutoComplete from '../../Components/CustomAutocomplete';
// import LoadingPage from '../LoadingScreen';
import DottedProgress from '../../Components/DottedProgress ';

const RegisterStep4 = ({ navigation }) => {



  const [loading, setLoading] = useState(true); // State to track loading state

  const [address, setAddress] = useState('');

  const [location, setLocation] = useState(null);


  





 


  const handleMarkerDragEnd = async (e) => {
    const newLocation = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
  
    // Use the OpenCage Geocoding API to get address details
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${newLocation.latitude}+${newLocation.longitude}&key=962579e1733a4ce4847976a35d27c8a8`,
      );
  
      if (!response.ok) {
        console.error('Geocoding request failed');
        console.error(response.status, response.statusText);
        return;
      }
  
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted);
        setCountry(data.results[0].components.country);
        setCity(data.results[0].components.state);
        setNeighborhood(data.results[0].components.suburb);
  

      } else {
        console.error('No results found');
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    }
  
    setLocation(newLocation);
  };
  

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Location permission denied');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        });

      } catch (error) {
        console.error(error);
      }
    }

    requestLocationPermission(); 
  
  
    // Fetch countries just once, when the component mounts
   
   
      
  }, []);


    // console.log(location["coords"]["latitude"]);
    // console.log(location["coords"]["longitude"]);

  const handleNext = () => {
    // Save the user's selected address, location, country, city, and neighborhood
    navigation.navigate('RegisterStep5', {
      address,
      location,
      country,
      city,
      neighborhood,
    });
  };
 return loading ? 
  ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>hiiiiiiiiiiiiiiii</Text>
  <Text>Loading...</Text>
</View>)
  : (    <Layout style={styles.container}>
  {/* <Icon
    name="map"
    fill="#FF6666"
    style={styles.icon}
  /> */}


  <Text category="h4" style={styles.title}>
    Location
  </Text>
  <Text style={styles.subtitle}>
    Where are you located?
  </Text>
  <Input
    label="Address"
    placeholder="Enter your address"
    value={address}
    onChangeText={setAddress}
    style={styles.input}
  />

  <Input label="Country" value={country} disabled style={styles.input} />


  <CustomAutoComplete data={countries} onSelect={onCountrySelect}  placeholder="Select your Country" />

  {/* <Picker
    selectedValue={city}
    onValueChange={handleCityChange}
  >
    {cities.map((city) => (
      <Picker.Item key={city.id} label={city.name} value={city} />
    ))}
  </Picker> */}
  {/* ... other UI elements */}
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
        } }
        title="Selected Location"
        description="Your address"
      />
    )}
  </MapView>
  <Button onPress={handleNext} style={styles.button}>
    Next
  </Button>
</Layout>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    marginBottom: 16,
  },
  subtitle: {
    marginBottom: 16,
    color: '#333333',
  },
  input: {
    marginBottom: 16,
  },
  map: {
    flex: 1,
    marginBottom: 16,
    width: '100%',
    height: 250,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#FF6666',
  },

  select: {
    width: '100%', // You can adjust the width as needed
    borderRadius: 8, // Adjust the border radius as needed
    backgroundColor: theme.colors.background, // Use your theme background color
    borderColor: theme.colors.primary, // Use your theme primary color
  },
});

export default RegisterStep4;
