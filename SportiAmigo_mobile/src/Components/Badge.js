import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ text, color , top = 0,left = 0,right = 0}) => {
  return (
    <View style={[styles.badge, { backgroundColor: color , position:'absolute', top:top, left:left,right:right}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Badge;
