import { Input, Layout, Text, Button } from "@ui-kitten/components";
import React, {useState} from "react";
import {  Alert, StyleSheet } from "react-native";
import { theme } from "../../../themes";
import axiosInstance from "../../../axiosConfig";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../features/userFeature/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InfoUpdateScreen = ({ route, navigation }) => {
  const { key_fileld, title } = route.params;


  const dispatch = useDispatch();

  React.useEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.buttonText,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation, title]);


  const [values, setValues] = useState({});

  const handleChange = (field, text) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: text,
    }));

    console.log(values);
  };



  const handleUpdate = async () => {
    try {
      // Make a PUT request to your backend API endpoint
      const response = await axiosInstance.put("/api/userauth/profile/", values);

      // Handle the response as needed
      console.log(response.status);
      console.log(response.data);

      // You can navigate back or perform other actions after the update
      
      await AsyncStorage.setItem("userInfo", JSON.stringify(response.data));

      // Dispatch the action to the reducer to update the state
      dispatch(updateUserInfo(response.data));

      navigation.goBack();
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        Edit Your {title}
      </Text>
      {key_fileld.map((item, index) => (
        <Input
          key={index}
          placeholder={item.replaceAll("_", " ")}
          label={item.replaceAll("_", " ")}
          style={styles.input}
          textStyle={styles.inputText}
          labelStyle={styles.label}
          onChangeText={(text) => handleChange(item, text)}

        />
      ))}


      <Button onPress={handleUpdate} style={styles.button}>
        Save Changes
      </Button>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background,
  },
  title: {
    marginBottom: theme.spacing.large,
    color: theme.colors.primary,
  },
  input: {
    marginBottom: theme.spacing.medium,
  },
  inputText: {
    color: theme.colors.text,
  },
  label: {
    color: theme.colors.text,
  },

  button: {
    marginTop: theme.spacing.large,
    backgroundColor: theme.colors.button,
  },
});

export default InfoUpdateScreen;
