import React, { useState } from "react";
import { ScrollView, Image, View, StyleSheet } from "react-native";
import {
  Layout,
  Text,
  Button,
  Input,
  Icon,
  Modal,
  Datepicker,
} from "@ui-kitten/components";
import SportScheduleSection from "../../../Components/SportScheduleSection";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SectionWraper from "./SectionWraper";
import SportClickScreen from "../HomeScreens/SportClickScreen";
import { NavigationContainer } from "@react-navigation/native";

const FacilityDetailsScreen = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());

  navigation.setOptions({
    headerShown: false,
  });

  const { facility } = route.params;

  const Tab = createMaterialTopTabNavigator();

  // const sportScreens = facility.sports.reduce((screens, sport) => {
  //   screens[sport.name] = () => <SportScheduleSection facility_id={facility.id} sport_id={sport.id} />;
  //   return screens;
  // }, {});

  return (
    <Layout style={styles.container}>
      <Image
        source={{ uri: facility.profile_image_url }}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <Text category="h4" style={styles.title}>
          {facility.name}
        </Text>
        <Text style={styles.description}>{facility.description}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Capacity: {facility.capacity}</Text>
          <Text style={styles.infoText}>Price: {facility.price}</Text>
          <Text style={styles.infoText}>
            Operating Hours: {facility.operating_hours}
          </Text>

          {/* Date Picker with ui kitten */}
          <Datepicker
            style={{ width: 200 }}
            date={date}
            onSelect={(nextDate) => setDate(nextDate)}
          />

          {/* Booking Button */}
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("SportsTab", { facility,
            date : date.
            toISOString().split('T')[0]
             })}
          >
            Book Now
          </Button>

          {/* Add other facility details */}
        </View>

        {/* { facility.sports && facility.sports.map((sport) => (
            <SportScheduleSection facility_id={ facility.id} sport_id={sport.id} />
          ))} */}
      </View>

      {/* <SportScheduleSection facility_id={facility.id} sport_id={facility.sports[0].id} /> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
    color: "gray",
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoText: {
    marginBottom: 8,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
  },
});

export default FacilityDetailsScreen;
