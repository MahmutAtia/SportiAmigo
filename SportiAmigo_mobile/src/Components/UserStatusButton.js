import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import axiosInstance from '../axiosConfig';




const UserStatusButton = ({item, setItem}) => {
    
    const handle_send_request = (item) => {
      const endpoint = `/api/friends/send-request/${item.id}/`;
      axiosInstance
        .post(endpoint)
        .then((res) => {
          // if created status is 201
          if (res.status === 201) {

            setItem( prev => ({
              ...prev,
              user_status: 0
            })
                

            );
            console.log(item);
           
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error in sending friend request");
        });
    };
  
    const handle_accept_request = (item) => {
      const endpoint = `/api/friends/accept-request/${item.id}/`;
      axiosInstance
        .post(endpoint)
        .then((res) => {
          // if res status is 202 (accepted)
          if (res.status === 202) {
           setItem( prev => ({
                ...prev,
                is_friend: true,
                user_status: -1
            })
                
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error in accepting friend request");
        });
    };
  
    const handle_cancel_request = (item) => {
      const endpoint = `/api/friends/cancel-request/${item.id}/`;
      axiosInstance
        .post(endpoint)
        .then((res) => {
          // if res status is 202 (accepted)
          if (res.status === 202) {
            setItem( prev => ({
                ...prev,
                user_status: -1
            })
                
            );        }
        })
        .catch((err) => {
          console.log(err);
          alert("Error in cancling friend request");
        });
    };
  
    const handledecline_request = (item) => {
      const endpoint = `/api/friends/decline-request/${item.id}/`;
      axiosInstance
        .post(endpoint)
        .then((res) => {
          // if res status is 202 (accepted)
          if (res.status === 202) {
          setItem( prev => ({
                ...prev,
                user_status: -1
            })
                
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error in declining friend request");
        });
    };
  
    const handele_unfriend = (item) => {
      const endpoint = `/api/friends/unfriend/${item.id}/`;
      axiosInstance
        .post(endpoint)
        .then((res) => {
          // if res status is 202 (accepted)
          if (res.status === 202) {
            setItem( prev => ({
                ...prev,
                is_friend: false,
                user_status: -1
            })
                
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Error in unfriending");
        });
    };

    const renderItem = (item) => {
        // console.log('item is', item.user_status);
        if (item.is_self) {
          return (
            <Button disabled size="tiny">
              It is you
            </Button>
          );
        } else if (item.is_friend === true) {
          return (
            <Button onPress={() => handele_unfriend(item)} size="tiny">
              unfriend
            </Button>
          );
    
          // user_status
          // -1 = NO_REQUEST_SENT
          // 1 = YOU_RECEIVED_REQUEST
          // 0 = YOUR_REQUEST_SENT
        } else if (item.user_status === -1) {
          return (
            <Button onPress={() => handle_send_request(item)} size="tiny">
              add friend
            </Button>
          );
        } else if (item.user_status === 1) {
          return (
            <Button onPress={() => handle_accept_request(item)} size="tiny">
              accept request
            </Button>
          );
        } else if (item.user_status === 0) {
          return (
            <Button onPress={() => handle_cancel_request(item)} size="tiny">
              cancel request
            </Button>
          );
        }
      };

    return (
        <View>
            {renderItem(item)}
        </View>
       
    );
}

const styles = StyleSheet.create({})

export default UserStatusButton;
