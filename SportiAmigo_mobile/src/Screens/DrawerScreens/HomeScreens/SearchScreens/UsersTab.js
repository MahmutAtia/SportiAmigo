import React, { useEffect, useState } from 'react';
import {View, StyleSheet, } from 'react-native';
import { Layout, Spinner, Text } from '@ui-kitten/components';
import UsersStatus from '../../../../Components/UserStatus';
import axiosInstance from '../../../../axiosConfig';
import { LoadingAnimation } from '../../../LoadingScreens/LoadingScreen1';

const UsersTab = ({query}) => {

    const [users, setUsers] = useState([]);
    const [ loading, setLoading ] = useState(false);


    
  const handleUserSearch = () => {
    // Logic for handling the search action with searchText
    // Add your search logic here, such as fetching search results
    setLoading(true);
    const endpoint = `/api/search/user/?query=${query}`;
    axiosInstance
      .get(endpoint)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data.length);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    handleUserSearch();
    }
    , [  ]);

    return loading ? (
                <>
                <Text>Loading...</Text>
                <Spinner  size='giant'  />
                </>
              ) : (
        
          <UsersStatus users={users} setUsers={setUsers} />

    );

       
    
}

const styles = StyleSheet.create({})

export default UsersTab;
