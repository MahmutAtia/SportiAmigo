import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Screens
import SignInScreen from "./Screens/SignInScreen";
import RegisterStep1 from "./Screens/RegistrationFlowScreens/RegisterStep1";

// UI Kitten
import { Layout, Text } from "@ui-kitten/components";
import RegisterStep3 from "./Screens/RegistrationFlowScreens/RegisterStep3";
import RegisterStep2 from "./Screens/RegistrationFlowScreens/RegisterStep2";
import AppDrawerNavigator from "./Layouts/HomeLayout";


// Redux
import { useSelector, useDispatch } from 'react-redux'
import { loginFailure, loginSuccess, logout, restoreToken } from './features/userFeature/authSlice'
import RegisterStep4 from "./Screens/RegistrationFlowScreens/RegisterStep4";
 







const Stack = createNativeStackNavigator();

function Index() {
  const state = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  console.log("state", state);

  useEffect(() => {
    const _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      const userInfo = await AsyncStorage.getItem("userInfo");
      console.log("userToken", userToken);
      console.log("userInfo", userInfo);
      if (userInfo) {   // if user info exist in local storage because the token i use it regstration for updating data
        dispatch(loginSuccess({ userToken, userInfo: JSON.parse(userInfo) }))
        // AsyncStorage.setItem("userInfo", userInfo);
      }
      else {
        dispatch(loginFailure())
      }
    };

    _bootstrapAsync();
  }, []);
 
  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }





  // Later i will use redux to handel authentication and user data
  return (
    
      <NavigationContainer>

          <Stack.Navigator
      screenOptions={{
        gestureDirection: "horizontal-inverted",
        animation:'slide_from_right',
        // presentation: 'modal',
        //       animationTypeForReplace: 'push',
      }}
          
          >

            {state.isSignout ? ( // if user info not exist in the state because the token i use it regstration for updating data
              <>
        <Stack.Screen name="SignIn" component={SignInScreen}
        options={{
          title: 'Sign in',
          headerShown: false,
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace:  'pop' ,
        }} />
        <Stack.Screen name="RegisterStep1" component={RegisterStep1}  options={{ headerShown: false }} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2}   options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterStep3" component={RegisterStep3}  options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterStep4" component={RegisterStep4}  options={{ headerShown: false }}/>
        </>) : (
          <>
          <Stack.Screen name="AppDrawerNavigator" component={AppDrawerNavigator} options={{ headerShown: false }}/>
          </>
        )}

      </Stack.Navigator>
          
         
      </NavigationContainer>
    
  );
}

export default Index;
