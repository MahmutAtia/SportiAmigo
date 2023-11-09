import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View} from "react-native";
import axios from "../axiosConfig"; // Import the Axios instance you created
import { Input, Button, Text, Icon } from '@ui-kitten/components';
import { theme } from '../themes';
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../features/userFeature/authSlice'
import { StyleSheet } from "react-native";

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

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
        console.log(data);

        // Store the token in AsyncStorage
        await AsyncStorage.setItem("userToken", data.token);
        await AsyncStorage.setItem("userInfo", JSON.stringify(data.user));

        // Dispatch the action to the reducer to update the state
        dispatch(loginSuccess({ userToken: data.token, userInfo: data.user }));

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
    <View style={styles.container}>
    <Input
      placeholder="Email"
      onChangeText={setEmail}
      value={email}
      style={styles.input}
      keyboardType="email-address"
    />
    <Input
      placeholder="Password"
      onChangeText={setPassword}
      value={password}
      secureTextEntry
      style={styles.input}
    />
    <Button title="Sign in" onPress={signInAsync} style={styles.button}>
      Sign in
    </Button>

    <Text category="s1" style={styles.forgotPassword}>
      Forgot your password?{' '}
      <Text
        style={styles.resetLink}
        onPress={() => {
          navigation.navigate('PasswordReset');
        }}
      >
        Reset it
      </Text>
    </Text>

    <Button
      title="Register"
      onPress={() => navigation.navigate('RegisterStep1')}
      style={styles.registerButton}
      icon={(props) => <Icon {...props} name="person-add-outline" />}
    >
      Register
    </Button>

    {/* Testing purposes only */}
    <Button onPress={() => navigation.navigate('RegisterStep2')} style={styles.testButton} />
    <Button onPress={() => navigation.navigate('RegisterStep3')} style={styles.testButton} />
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  input: {
    marginBottom: theme.spacing.medium,
    ...theme.input,
  },
  button: {
    marginBottom: theme.spacing.medium,
  },
  forgotPassword: {
    textAlign: 'center',
    marginBottom: theme.spacing.medium,
    ...theme.typography.subtitle,
  },
  resetLink: {
    color: theme.colors.primary,
  },
  registerButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  testButton: {
    backgroundColor: theme.colors.button,
    borderColor: theme.colors.button,
    marginBottom: theme.spacing.medium,
  },
});


export default SignInScreen;
