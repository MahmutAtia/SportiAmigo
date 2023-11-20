import React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../Screens/DrawerScreens/HomeScreens/HomeScreen";
import SportClickScreen from "../Screens/DrawerScreens/HomeScreens/SportClickScreen";
import FaciltyDetailsScreen from "../Screens/DrawerScreens/HomeScreens/FaciltyDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllFacilitiesScreen from "../Screens/DrawerScreens/AllFacilitiesScreens/AllFacilitiesScreen";
import AllFacilitiesStack from "./AllFacilitiesStack";
import FacilityDetailsScreen from "../Screens/DrawerScreens/AllFacilitiesScreens/FacilityDetailsScreen";
import SearchScreen from "../Screens/DrawerScreens/HomeScreens/SearchScreen";

const HomeStack = () => {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen name="SportClickScreen" component={SportClickScreen} />
      <stack.Screen
        name="FaciltyDetailsScreen"
        component={FacilityDetailsScreen}
      />
      <stack.Screen name="AllFacilitiesStack" component={AllFacilitiesStack} />

      <stack.Screen name='Search' component={SearchScreen} /> 
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeStack;
