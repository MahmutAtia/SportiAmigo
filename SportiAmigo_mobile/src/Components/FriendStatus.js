import React from "react";
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Icon, Text, Avatar, ListItem, List, Button } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import axiosInstance from "../axiosConfig";







const UsersStatus = ({ friends, setFriends}) => {

    const myUser = useSelector(state => state.auth.userInfo);    

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



    
  const renderFriendStatus = (friend) => {
    if (friend.to_user === myUser.id && !friend.accepted) {
        return  <Button onPress={ ()=>handlePress(item) }
        size='tiny'>
         Accept Request
           </Button>;
        }
    else if ( friend.from_user === myUser.id && !friend.accepted)  {
      return <Button disabled onPress={ ()=>handlePress(item) }
      size='tiny'>
      pending
         </Button>;
    } else if (friend.accepted){
        return <Button  disabled onPress={ ()=>handlePress(item) }
        size='tiny'>
        you are friends
           </Button>;
    }
   
  };

}


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

  return <List style={styles.container} data={friends} renderItem={renderItem} />;
};


const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
  });
export default UsersStatus;
