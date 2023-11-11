import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input, Icon, Layout , Datepicker} from '@ui-kitten/components';
import DottedProgress from '../../Components/DottedProgress ';
import { theme } from '../../themes';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';

const RegisterStep2 = ({ navigation, route }) => {



     
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState('');
  const [favoriteSports, setFavoriteSports] = useState('');


  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (e) => {

  //     // Prevent default behavior of leaving the screen
  //     e.preventDefault()}), [navigation]  });
  



  const handleNext = async() => {
    // Save the user's phone, date of birth, gender, and favorite sports
    const response = await axiosInstance.put('/api/userauth/profile/', {
      phone_number: phone,
      date_of_birth: dateOfBirth.toISOString().split('T')[0],
      gender,
      favorite_sports: favoriteSports,
    });

    
    console.log(response.status);
    console.log(response.data);
    try {
      if (response.status === 200) {
        // Registration was successful



        navigation.navigate('RegisterStep3'); // Navigate to the next registration step
      }  else {

        // Handle other error cases
        alert(
          'An error occurred while authenticating. Please try again later.'
        );
      }
    } catch (error) { 
      // Handle network or other errors 
      // Handle network errors and other unexpected issues
      console.error(error);
      alert( 'An error occurred while authenticating. Please try again later.' );
    }


    // Navigate to the next step
  };

  const handleSkip = () => {
    // Skip the step and navigate to the next step
    navigation.navigate('RegisterStep3');
  }

  console.log(dateOfBirth); 
  return (
    <Layout style={styles.container}>
      {/* <Icon
        name="person"
        fill="#FF6666"
        style={styles.icon}
      /> */}

      <DottedProgress totalSteps={5} currentStep={2} />

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


<Datepicker
        date={dateOfBirth}
        onSelect={(date)=>setDateOfBirth(date)}
        placeholder="Date of Birth"
        min={new Date('1900-01-01')}
        max={new Date()} // Set max date to the current date
        // accessoryRight={(props) => <Icon {...props} name="calendar-outline" />}
        style={styles.input}
      />

      {/* <Input
        label="Date of Birth"
        placeholder="Enter your date of birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={styles.input}
      /> */}
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
        Next
      </Button>
      <Button style={styles.button} onPress={handleSkip}>
        Skip 
      </Button>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    marginBottom:  theme.spacing.small,
  },
  input: {
    marginBottom: theme.spacing.medium,
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.medium,
    backgroundColor: theme.colors.button,
    width: '100%',
  },
});

export default RegisterStep2;
