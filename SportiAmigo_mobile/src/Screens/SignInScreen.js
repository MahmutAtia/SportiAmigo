import React from 'react';
import { View, Button } from 'react-native';
// import { AsyncStorage } from 'react-native';

function SignInScreen({ navigation }) {
  const signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  };

  return (
    <View>
      <Button title="Sign in!" onPress={signInAsync} />
    </View>
  );
}


SignInScreen.navigationOptions = {
    title: 'Please sign in',
  };
export default SignInScreen;