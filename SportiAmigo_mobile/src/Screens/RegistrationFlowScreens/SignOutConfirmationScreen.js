import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@ui-kitten/components';

const SignOutConfirmationScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Navigate to the sign-in screen (change 'SignIn' to the actual screen name)
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>You have been signed out successfully.</Text>
    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    // Add your custom text styles here
  },
  button: {
    backgroundColor: '#007BFF', // Button background color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 18,
  },
});


export default SignOutConfirmationScreen;
