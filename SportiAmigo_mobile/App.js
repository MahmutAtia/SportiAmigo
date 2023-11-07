import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Screens
import SearchScreen from "./src/Screens/SearchScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SignInScreen from "./src/Screens/SignInScreen";
import RegisterStep1 from "./src/Screens/RegistrationFlowScreens/RegisterStep1";

// UI Kitten
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import Splash from "./src/Screens/RegistrationFlowScreens/Splach";
import SignOutConfirmationScreen from "./src/Screens/RegistrationFlowScreens/SignOutConfirmationScreen";
import RegisterStep3 from "./src/Screens/RegistrationFlowScreens/RegisterStep3";
import RegisterStep2 from "./src/Screens/RegistrationFlowScreens/RegisterStep2";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const _bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setIsLoading(false);
    };

    _bootstrapAsync();
  }, []);
 


  // Later i will use redux to handel authentication and user data
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoading ? 'SplashScreen' : userToken ? 'App' : 'SignIn'}>
        <Stack.Screen name="SplashScreen" component={Splash}   options={{ headerShown: false }}/>
        <Stack.Screen name="App" component={HomeScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={SearchScreen}   options={{ headerShown: false }}/>


        {/* Auth Screens */}
        <Stack.Screen name="SignOutConfirmation" component={SignOutConfirmationScreen}  options={{ headerShown: false }}/>
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
      </Stack.Navigator>
          
         
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
