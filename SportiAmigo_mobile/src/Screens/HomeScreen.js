
import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userFeature/authSlice';


function HomeScreen({ navigation }) {


    dispatch= useDispatch()
    const showMoreApp = () => {
      navigation.navigate('Search');
    };
  
    const signOutAsync = async () => {
      await AsyncStorage.clear();
      dispatch(logout())
      
    };
  
    return (
      <View>
        <Button title="Show me more of the app" onPress={showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={signOutAsync} />
      </View>
    );
  }
  


  export default HomeScreen;