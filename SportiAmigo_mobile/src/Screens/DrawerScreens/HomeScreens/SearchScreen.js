import React, { useState } from 'react';
import {  Text, Input, Button, Layout } from '@ui-kitten/components';
import axiosInstance from '../../../axiosConfig';
import UserStatus from '../../../Components/UserStatus';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = () => {
    // Logic for handling the search action with searchText
    console.log('Searching for:', searchText);
    // Add your search logic here, such as fetching search results

    axiosInstance.get(`/api/search/user/?query=${searchText}`).then((res) => {
      setUsers(res.data);
      console.log(res.data.length);

    }).catch((err) => {
      console.log(err);
    }
    );
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }}>
      <Input
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ marginTop: 20, width: '90%' }}
      />
      <Button onPress={handleSearch} style={{ marginTop: 20 }}>
        Search
      </Button>

      {/* Add your search results here */}
      <UserStatus users={users} setUsers={setUsers} />


    </Layout>
  );
};

export default SearchScreen;
