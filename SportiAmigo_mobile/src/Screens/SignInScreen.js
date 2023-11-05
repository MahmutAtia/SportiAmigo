import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import axios from "../axiosConfig"; // Import the Axios instance you created

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInAsync = async () => {
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await axios.post("/api/userauth/login/", {
        email: email.toLowerCase(),
        password,
      });
      // Assuming your API returns a token upon successful authentication
      if (response.status === 200) {
        const data = response.data;
        await AsyncStorage.setItem("userToken", data.token);

        // we will store the user data in AsyncStorage base on the user id or redux

        navigation.navigate("App");
      } else {
       
          // Handle other error cases
          alert(
            "An error occurred while authenticating. Please try again later."
          );
        
      }
    } catch (error) {
      // Handle network or other errors
      // Handle network errors and other unexpected issues
      console.error(error);

      if (error.response) {
        // Server responded with an error status
        if (error.response.status === 401) {
          alert("Authentication failed. Please check your  password.");
        } else if (error.response.status === 404) {
          alert("Authentication failed. Please check your Email.");
        } else {
          alert(
            "An error occurred while authenticating. Please try again later."
          );
        }
      } else {
        // Network error or other unexpected issues
        alert(
          "A network error occurred. Please check your internet connection and try again later."
        );
      }
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign in" onPress={signInAsync} />
    </View>
  );
}

SignInScreen.navigationOptions = {
  title: "Please sign in",
};

export default SignInScreen;
