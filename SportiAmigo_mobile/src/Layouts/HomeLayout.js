// Import dependencies
import React, { useEffect } from "react";
import {  Image } from "react-native";
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

// Define screens for each section
import FriendsScreen from "../Screens/DrawerScreens/FriendsScreen";
import MessagesScreen from "../Screens/DrawerScreens/MessagesScreen";
import SportFacilitiesScreen from "../Screens/DrawerScreens/SportFacilitiesScreen";
import FacilityDetailsScreen from "../Screens/DrawerScreens/FacilityDetailsScreen";
import NewFacilityScreen from "../Screens/DrawerScreens/NewFacilityScreen";

// Import drawer theme and styles
import HomeScreen from "../Screens/HomeScreen";
import MyAccountStack from "./MyAccountStack";
import { useTheme , Layout, Text} from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../axiosConfig";
import { setFacility } from "../features/userFeature/authSlice";
import { LoadingAnimation } from "../Screens/LoadingScreens/LoadingScreen1";

const Drawer = createDrawerNavigator();

// Define drawer content
const CustomDrawerContent = (props) => {

    const theme = useTheme()
    const isFacilityAdmin = useSelector(state => state.auth.userInfo.is_facility_admin)
    const facility = useSelector(state => state.auth.facility)    








    return (
      <DrawerContentScrollView {...props}>
        <Layout style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          backgroundColor: theme['color-primary-500'],
        }}>
          <Image source={{ uri: 'user_avatar_url' }} style={
            {
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: theme['color-primary-400'],
            }
          } />
          <Text style={
            {
              color: theme['color-primary-100'],
              marginHorizontal: 16,
              ...theme.typography.subtitle,
            }
          }>User Name</Text>
        </Layout>
  
        {/* First group of items */}
        <DrawerItem
          label="Home"
          icon={({ color, size }) => <FontAwesome name="home" size={size} color={color} />}
          onPress={() => props.navigation.navigate('Home')}
        />

        <DrawerItem
          label="My Account"
          icon={({ color, size }) => <FontAwesome name="user" size={size} color={color} />}
          onPress={() => props.navigation.navigate('MyAccount')}
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
        <Layout style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 16, marginVertical: 8 }} />

    {  facility &&  <DrawerItem
          label="Facility Details"
          icon={({ color, size }) => <FontAwesome name="building" size={size} color="orange" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('FacilityDetails')}
        />}
 {    isFacilityAdmin && !facility &&   <DrawerItem
          label="Register New Facility"
          icon={({ color, size }) => <FontAwesome name="plus-square-o" size={size} color="purple" /* Customize the color here */ />}
          onPress={() => props.navigation.navigate('NewFacility')}
        />}
      </DrawerContentScrollView>
    );
  };
  

const AppDrawerNavigator = () => {
  const theme = useTheme()

  const [loading, setLoading] = React.useState(true)



  // Redux
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()



  useEffect(() => {
    if (auth.userInfo.is_facility_admin){
      axiosInstance.get('/api/userauth/facility-admin/').then(res => {

        console.log(res.data)
        const data = res.data
        if (data.facility)
        dispatch(setFacility(data.facility))
        }).catch(err => {
          console.log(err)
        })

        setLoading(false)
    }

  }, [])

  return loading ? <LoadingAnimation/> : (
    <NavigationContainer  independent={true} >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
       screenOptions={{
          activeTintColor:  theme['color-primary-500'], // Your active color
          inactiveTintColor : theme['color-primary-500'], // Your inactive color
          activeBackgroundColor: theme['color-primary-100'], // Your active background color
          inactiveBackgroundColor: theme['color-primary-100'], // Your inactive background color
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
          name="MyAccount"
          component={MyAccountStack}
          options={{ title: "My Account", headerShown: false}}
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
