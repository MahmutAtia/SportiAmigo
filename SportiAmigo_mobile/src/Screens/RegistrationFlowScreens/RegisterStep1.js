import React, { useState } from "react";
import {
  Input,
  Button,
  Text,
  Layout,
  style,
  useStyleSheet,
} from "@ui-kitten/components";
import axios from "../../axiosConfig"; // Import the Axios instance you created
import { theme } from "../../themes"; // Import your custom theme
import DottedProgress from "../../Components/DottedProgress ";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../../features/userFeature/authSlice";
import { StyleSheet } from "react-native";

function RegisterStep1({ navigation }) {
  

  // State variables to store user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setpassword2] = useState("");

  const dispatch = useDispatch();

  const handleNext = async () => {
    // Perform user input validation here
    if (password !== password2) {
      alert("Passwords do not match.");
      return;
    }

    if (!firstName || !lastName || !email || !password || !password2) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare user data for registration
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password2,
    };

    try {
      // Make an API POST request to register the user
      const response = await axios.post("/api/userauth/register/", userData);
      console.log(response.data);
      console.log(response.status);

      if (response.status === 201) {
        // Registration was successful
        dispatch(registerSuccess({ userToken: response.data.userToken }));
        navigation.navigate("RegisterStep2"); // Navigate to the next registration step
      } else if (response.status === 200) {
        // User already exists
        alert("This email address is already registered.");
      } else {
        // Handle registration error
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout style={styles.container}>
      <DottedProgress totalSteps={5} currentStep={1} />

      <Text category="h4" style={styles.title}>
        Registration - Step 1
      </Text>

      <Input
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
        style={styles.input}
      />
      <Input
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
        style={styles.input}
      />
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ marginBottom: 16 }}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={setpassword2}
        value={password2}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Next" onPress={handleNext} style={styles.button}>
        Next
      </Button>
    </Layout>
  );
}

export default RegisterStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    padding: theme.spacing.medium,
  },
  input: {
    marginBottom: theme.spacing.medium,
  },
  button: {
    marginBottom: theme.spacing.medium,
    width: "100%",
  },
  title: {
    marginBottom: theme.spacing.medium
  },
});
