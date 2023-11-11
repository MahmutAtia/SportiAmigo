import { StyleSheet } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const theme = {
  colors: {
    primary: '#3498db',      // Blue color for primary
    secondary: '#2980b9',    // Darker blue color for secondary
    background:  'white',   // Light background color
    text: '#2c3e50',         // Dark text color
    button: '#3498db',       // Blue button color
    buttonText: '#FFFFFF',    // White button text color
    border: '#bdc3c7',        // Border color
    placeholder: '#95a5a6',  // Placeholder color
    accent: '#f39c12',        // Accent color (e.g., for highlighting)
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8,
      // color: '#2c3e50',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      // color: '#2c3e50',
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      // color: '#2c3e50',
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 16,
      // color: '#95a5a6',
    },
    body: {
      fontSize: 14,
      marginBottom: 16,
      // color: '#2c3e50',
    },
    button: {
      fontSize: 16,
      fontWeight: 'bold',
      // color: '#FFFFFF',
    },
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    // backgroundColor: '#3498db',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    // borderColor: '#bdc3c7',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    // color: '#2c3e50',
  },
  map: {
    flex: 1,
    height: 200,
    marginBottom: 16,
  },
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
