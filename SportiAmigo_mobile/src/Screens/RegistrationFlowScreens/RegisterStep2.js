import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input, Icon, Layout } from '@ui-kitten/components';

const RegisterStep2 = ({ navigation, route }) => {
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [favoriteSports, setFavoriteSports] = useState('');


  const handleNext = () => {
    // Save the user's phone, date of birth, gender, and favorite sports
    navigation.navigate('RegisterStep3');
  };

  return (
    <Layout style={styles.container}>
      {/* <Icon
        name="person"
        fill="#FF6666"
        style={styles.icon}
      /> */}
      <Text category="h4" style={styles.title}>
        Personal Info
      </Text>
      <Input
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Input
        label="Date of Birth"
        placeholder="Enter your date of birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={styles.input}
      />
      <Input
        label="Gender"
        placeholder="Enter your gender"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <Input
        label="Favorite Sports"
        placeholder="Enter your favorite sports"
        value={favoriteSports}
        onChangeText={setFavoriteSports}
        style={styles.input}
      />
      <Button onPress={handleNext} style={styles.button}>
        Complete Registration
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#FF6666',
  },
});

export default RegisterStep2;
