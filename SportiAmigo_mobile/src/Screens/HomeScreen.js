
import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({ navigation }) {
    const showMoreApp = () => {
      navigation.navigate('Search');
    };
  
    const signOutAsync = async () => {
      await AsyncStorage.clear();
      navigation.navigate('SignOutConfirmation');
    };
  
    return (
      <View>
        <Button title="Show me more of the app" onPress={showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={signOutAsync} />
      </View>
    );
  }
  


  export default HomeScreen;