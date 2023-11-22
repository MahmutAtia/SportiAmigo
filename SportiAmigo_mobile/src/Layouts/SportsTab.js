import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import SportScheduleSection from "../Components/SportScheduleSection";

const SportsTab = ({ route }) => {
  const { facility, date } = route.params;
  console.log(route);
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      {facility.sports &&
        facility.sports.map((sport) => (
          <Tab.Screen name={sport.name}>
          {  ()=> <SportScheduleSection
              facility_id={facility.id}
              sport_id={sport.id}
              date={date}
            />}
          </Tab.Screen>
        ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SportsTab;
