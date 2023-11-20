import React, { useState } from 'react';
import { View } from 'react-native';
import {  Text, Input, Button } from '@ui-kitten/components';
import axios from 'axios';
import axiosInstance from '../../../axiosConfig';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Logic for handling the search action with searchText
    console.log('Searching for:', searchText);
    // Add your search logic here, such as fetching search results

    axiosInstance.get(`/api/friends/search/?query=${searchText}`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }}>
      <Input
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ marginTop: 20, width: '90%' }}
      />
      <Button onPress={handleSearch} style={{ marginTop: 20 }}>
        Search
      </Button>
    </View>
  );
};

export default SearchScreen;
