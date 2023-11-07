import { StyleSheet } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const theme = {
    colors: {
      primary: '#FF6666',
      secondary: '#FFAA99',
      background: '#F5F5F5',
      text: '#333333',
      button: '#D9534F',
      buttonText: '#FFFFFF',
    },
    // Add other styling options here, such as typography, spacing, etc.
  };




// Define your custom theme with colors
export const drawerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6666', // Your primary color
    background: '#F5F5F5', // Your background color
    card: '#FFFFFF', // Your card color
    text: '#333333', // Your text color
    border: '#D9534F', // Your border color
  },
};

export const drawerStyles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    backgroundColor: '#FFAA99', // Your header background color
  },
  userName: {
    color: '#333333', // Your text color
    fontSize: 18,
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    // Add additional styling as needed
  },
});
