import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/app/store';
import Index from './src/Index';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
    return (
        <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>

        <Index />
        </ApplicationProvider>
     
        </Provider>
    );
}



export default App;
