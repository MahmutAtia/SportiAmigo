import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const Badge = ({ text, color , top = 0,left = 0,right = 0}) => {
  return (
    <Layout  style={[styles.badge, { backgroundColor: color , position:'absolute', top:top, left:left,right:right}]}>
      <Text style={styles.text}>{text}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  badge: {
  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 5,
    width: 50,
    zIndex: 1,

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default Badge;
