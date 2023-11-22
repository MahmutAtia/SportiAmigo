import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components'

const FriendsScreen = () => {
  const [friends, setFriends] = useState([]);

 const fetchFriends = () => {
    axiosInstance.get('/api/friends/friendships/').then((res) => {
      console.log(res.data);
      setFriends(res.data);
    }).catch((err) => {
      console.log(err);
    });
  } 


  useEffect(() => {
    fetchFriends();
  }, []);

  
  return (
    <Layout>

    

    </Layout>
  )
}

export default FriendsScreen