import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Icon,
  Text,
  Avatar,
  ListItem,
  List,
  Button,
} from "@ui-kitten/components";
import axiosInstance from "../axiosConfig";
import { useNavigation } from "@react-navigation/native";
import UserStatusButton from "./UserStatusButton";

const UsersStatus = ({ users, setUsers }) => {
  const navigation = useNavigation();




  

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      key={index}
      onPress={() => 
        navigation.navigate("UserDetails", {
          user_id: item.id,
        })
      
      
      }
      title={`${item.first_name} ${item.last_name} `}
      description={`${item.state ? item.state : ""
      } ${item.city ? item.city : ""
      }`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => <UserStatusButton  item={item} />
      } // Changed here
    />
  );

  return <List style={styles.container} data={users} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 5,
  },
});

export default UsersStatus;
