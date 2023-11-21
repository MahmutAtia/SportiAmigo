import React from "react";
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Icon, Text, Avatar, ListItem, List, Button } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import axiosInstance from "../axiosConfig";







const UsersStatus = ({ users, setUsers}) => {

    // const myUser = useSelector(state => state.auth.userInfo);    

    console.log('my user id is', myUser.id);

    const handlePress = (item) => {
        console.log('add friend');
        console.log(item.id);

        axiosInstance.post('/api/friends/friendships/add/', 

        {
            'to_user': item.id
        }
        ).then((res) => {
          console.log(res.data);

        }).catch((err) => {
          console.log(err.response.data);
        }).finally(() => {
            users.map((user) => {
                if (user.id === item.id) {
                    user.is_friend = false;
                }
            });
            setUsers([...users]);});          


      }

  const renderItemAccessory = (item) => {
    switch (item.is_friend) {
      case true:
        return (
            <Button disabled size='tiny'>
            you are friends
                </Button>
         
        );
      case false:
        return (
            <Button disabled size='tiny'>
            pending
                </Button>

         
        );
      case null:
        return (
            <Button onPress={ ()=>handlePress(item) }
             size='tiny'>
            add friend
                </Button>
         
        );
      default:
        return null;
    }
  };


  const renderItemIcon = (props) => (
    <Icon
      {...props}
      name='person'
    />
  );




  

const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.first_name} ${item.last_name} ${index + 1}`}
      description={`${item.email} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => renderItemAccessory(item)} // Changed here
    />
  );

  return <List style={styles.container} data={users} renderItem={renderItem} />;
};


const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
  });
export default UsersStatus;
