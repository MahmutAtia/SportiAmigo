import React, { useEffect } from 'react';
import { ActivityIndicator,
    //  AsyncStorage,
     StatusBar, StyleSheet, View } from 'react-native';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const _bootstrapAsync = async () => {
    //   const userToken = await AsyncStorage.getItem('userToken');
        const userToken = true;


      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      navigation.navigate(userToken ? 'App' : 'Auth');

    };

    _bootstrapAsync();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;
