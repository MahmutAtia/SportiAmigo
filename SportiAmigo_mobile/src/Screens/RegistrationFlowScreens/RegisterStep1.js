import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components';
import axios from '../../axiosConfig'; // Import the Axios instance you created
import { theme } from '../../themes'; // Import your custom theme
import DottedProgress from '../../Components/DottedProgress ';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../features/userFeature/authSlice';

function RegisterStep1({ navigation }) {


  // State variable to keep track of the current registration step
  const totalSteps = 4; // Total number of registration steps
  const currentStep = 1; // Current step number



  // State variables to store user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setpassword2] = useState('');




  const dispatch = useDispatch();


  const handleNext = async () => {

    
    // Perform user input validation here
    if (password !== password2) {
      alert( 'Passwords do not match.' );
      return;
    }

    if (!firstName || !lastName || !email || !password || !password2)  {

      alert('Please fill in all fields.');
      return;
    }

    // Prepare user data for registration
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password2,
    };

    try {
      // Make an API POST request to register the user
      const response = await axios.post('/api/userauth/register/', userData);
      console.log(response.data);
      console.log(response.status);

      if (response.status === 201) {
        // Registration was successful
        dispatch(registerSuccess({userToken :response.data.userToken}));
        navigation.navigate('RegisterStep2'); // Navigate to the next registration step
      } else if (response.status === 200) {
        // User already exists
        alert('This email address is already registered.');
      } else {
        // Handle registration error
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
      alert('An error occurred. Please try again later.');
    }

   
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: theme.colors.background }}>
           <DottedProgress totalSteps={totalSteps} currentStep={1} />

     
     
      <Text category="h4" style={{ marginBottom: 16 }}>Registration - Step 1</Text>

      <Input
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
        style={{ marginBottom: 16 }}
      />
      <Input
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
        style={{ marginBottom: 16 }}
      />
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ marginBottom: 16 }}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{ marginBottom: 16 }}
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={setpassword2}
        value={password2}
        secureTextEntry
        style={{ marginBottom: 16 }}
      />
      <Button
        title="Next"
        onPress={handleNext}
        style={{ backgroundColor: theme.colors.button, borderColor: theme.colors.button, marginBottom: 16 }}
      >
        Next
      </Button>



    </View>
  );
}

export default RegisterStep1;
