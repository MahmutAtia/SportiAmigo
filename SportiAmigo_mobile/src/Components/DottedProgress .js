import React from 'react';
import { View, StyleSheet } from 'react-native';

const DottedProgress = ({ totalSteps, currentStep }) => {
  return (
    <View style={styles.container}>
      {[...Array(totalSteps).keys()].map((index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index < currentStep ? '#3498db' : '#bdc3c7',
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 32,
  },
});

export default DottedProgress;
