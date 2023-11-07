import React, { useEffect } from 'react';
import { ImageBackground, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from '@ui-kitten/components';

const Splash = () => {
  // You can add any initialization logic here

  useEffect(() => {
    // Simulate some async initialization process
    setTimeout(() => {
      // Navigate to the appropriate screen (e.g., SignInScreen or HomeScreen)
      // You can use navigation.navigate('YourScreenName') here
    }, 3000); // Change the duration to your desired time
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/splash.png')}
    >
      <View style={styles.content}>
        <Text category="h1" style={styles.text}>
          SportiAmigo
        </Text>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 16,
  },
});

export default Splash;
