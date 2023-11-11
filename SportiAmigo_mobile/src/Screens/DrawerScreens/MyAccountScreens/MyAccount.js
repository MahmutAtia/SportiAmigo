import React from "react";
import {  StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import UpdateInfoField from "../../../Components/UpdateInfoField";
import { theme } from "../../../themes";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Button, Layout } from "@ui-kitten/components";


const MyAccount = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const navigation = useNavigation();


  const handleNavigation = (title, key_fileld) => {
    navigation.navigate("UpdateInfo", {
      title,
      key_fileld,
    });
  };
  

  const userinfo = [
    {
      title: "Full Name",
      info: user.first_name + " " + user.last_name,
      key_fileld: ["first_name", "last_name"]
    },
    {
      title: "Email",
      info: user.email,
      key_fileld: ["email"]
    },

    {
      title: "Phone Number",
      info: user?.phone_number,
      key_fileld: ["phone_number"]
    },
    {
      title: "Address",
      info: user?.location_address,
      key_fileld: ["location_address"]
    },
    { title: "Gender", info: user?.gender ,
      key_fileld: ["gender"]
  },
  {
    title: "Date of Birth",
    info: user?.date_of_birth,
    key_fileld: ["date_of_birth"]
  }
  ];

  return     <Layout style={styles.container}>


    {userinfo.map((item, index) => {
        return (
            <UpdateInfoField
            key={index}
            title={item.title}
            info={item.info}
            onPress={
              
              () =>
               handleNavigation(item.title, item.key_fileld)}

            />
        );
        })}

        <Button style={styles.button} onPress={() => navigation.navigate("UpdateInfo")}>Change Password</Button>
  </Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
    borderRadius: theme.spacing.small,
  },
});
export default MyAccount;
