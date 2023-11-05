
import React from 'react';
import { View, Button } from 'react-native';
// import { AsyncStorage } from 'react-native';

function HomeScreen({ navigation }) {
    const showMoreApp = () => {
      navigation.navigate('Search');
    };
  
    const signOutAsync = async () => {
    //   await AsyncStorage.clear();
      navigation.navigate('Auth');
    };
  
    return (
      <View>
        <Button title="Show me more of the app" onPress={showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={signOutAsync} />
      </View>
    );
  }
  
  HomeScreen.navigationOptions = {
    title: 'Welcome to the app!',
  };

  export default HomeScreen;