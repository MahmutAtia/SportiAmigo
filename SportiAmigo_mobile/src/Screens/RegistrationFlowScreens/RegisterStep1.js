import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from '@ui-kitten/components';
import axios from 'axios'; // Import axios for API requests
import { theme } from '../../themes'; // Import your custom theme

function RegisterStep1({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = async () => {
    // Perform user input validation here
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare user data for registration
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    try {
      // Make an API POST request to register the user
      const response = await axios.post('/api/register/', userData);

      if (response.status === 201) {
        // Registration was successful
        navigation.navigate('RegisterStep2'); // Navigate to the next registration step
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
