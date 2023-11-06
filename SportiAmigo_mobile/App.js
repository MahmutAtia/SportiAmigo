import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import SearchScreen from './src/Screens/SearchScreen';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SignInScreen from './src/Screens/SignInScreen';


// UI Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen, Search: SearchScreen});
const AuthStack = createStackNavigator({ SignIn: SignInScreen});

const  AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);


// export default AppContainer;

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    < AppContainer />
  </ApplicationProvider>
);