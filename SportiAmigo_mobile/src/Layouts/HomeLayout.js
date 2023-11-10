// Import dependencies
import React from "react";
import { View, Text, Image } from "react-native";
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

// Define screens for each section
import UserDetailsScreen from "../Screens/DrawerScreens/UserDetailsScreen";
import FriendsScreen from "../Screens/DrawerScreens/FriendsScreen";
import MessagesScreen from "../Screens/DrawerScreens/MessagesScreen";
import SportFacilitiesScreen from "../Screens/DrawerScreens/SportFacilitiesScreen";
import FacilityDetailsScreen from "../Screens/DrawerScreens/FacilityDetailsScreen";
import NewFacilityScreen from "../Screens/DrawerScreens/NewFacilityScreen";

// Import drawer theme and styles
import { drawerStyles as styles, drawerTheme as customTheme } from "../themes";
import HomeScreen from "../Screens/HomeScreen";

const Drawer = createDrawerNavigator();

// Define drawer content
const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Image source={{ uri: 'user_avatar_url' }} style={styles.userAvatar} />
          <Text style={styles.userName}>User Name</Text>
        </View>
  
        {/* First group of items */}
        <DrawerItem
          label="Home"
          icon={({ color, size }) => <FontAwesome name="home" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Home')}
        />

        <DrawerItem
          label="User Details"
          icon={({ color, size }) => <FontAwesome name="user" size={size} color={color} />}
          onPress={() => props.navigation.navigate('UserDetails')}
        />
        <DrawerItem
          label="Friends"
          icon={({ color, size }) => <FontAwesome name="users" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Friends')}
        />
  
        {/* Second group of items with different colors */}
        <DrawerItem
          label="Messages"
          icon={({ color, size }) => <FontAwesome name="comments" size={size} color="gray" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('Messages')}
        />
        <DrawerItem
          label="Sport Facilities"
          icon={({ color, size }) => <FontAwesome name="soccer-ball-o" size={size} color="gray" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('SportFacilities')}
        />
  
        {/* Third group of items with different colors */}


        {/* Divider with margin */}
        <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 16, marginVertical: 8 }} />

        <DrawerItem
          label="Facility Details"
          icon={({ color, size }) => <FontAwesome name="building" size={size} color="orange" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('FacilityDetails')}
        />
        <DrawerItem
          label="Register New Facility"
          icon={({ color, size }) => <FontAwesome name="plus-square-o" size={size} color="purple" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('NewFacility')}
        />
      </DrawerContentScrollView>
    );
  };
  

const AppDrawerNavigator = () => {
  return (
    <NavigationContainer theme={customTheme} independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
          activeTintColor: "#FF6666", // Your active item color
          inactiveTintColor: "#333333", // Your inactive item color
          activeBackgroundColor: "#FFAA99", // Your active background color
          inactiveBackgroundColor: "#F5F5F5", // Your inactive background color
          itemStyle: {
            marginVertical: 0,
          },
        }}
      >

      <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" , }}
            />
        <Drawer.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: "User Details", headerShown: false}}
        />
        <Drawer.Screen
          name="Friends"
          component={FriendsScreen}
          options={{ title: "Friends" }}
        />
        <Drawer.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ title: "Messages" }}
        />
        <Drawer.Screen
          name="SportFacilities"
          component={SportFacilitiesScreen}
          options={{ title: "Sport Facilities" }}
        />
        <Drawer.Screen
          name="FacilityDetails"
          component={FacilityDetailsScreen}
          options={{ title: "Facility Details" }}
        />
        <Drawer.Screen
          name="NewFacility"
          component={NewFacilityScreen}
          options={{ title: "Register New Facility" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawerNavigator;
