import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/app/store';
import Index from './src/Index';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import LoadingScreen1 from './src/Screens/LoadingScreens/LoadingScreen1';
import LottieAnimation from './src/Screens/LoadingScreens/LoadingScreen1';

const App = () => {
    const animationSource = require('./assets/1.json'); // Adjust the file name


    const loading = true;

   return  (
        <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>

        <Index />
        </ApplicationProvider>
     
        </Provider>
    );
}



export default App;
