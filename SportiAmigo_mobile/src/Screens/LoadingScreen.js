import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from '@ui-kitten/components';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Your App Name</Text>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
      <View style={styles.spinnerContainer}>
        <Spinner size="giant" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0072BB', // Background color
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    color: 'white', // Text color
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
  },
  spinnerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the spinner
    padding: 20,
    borderRadius: 10,
  },
});

export default LoadingPage;