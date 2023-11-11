import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/app/store';
import Index from './src/Index';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import { ThemeContext } from './Contexts/theme-context';

const App = () => {

    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
    };

   return  (
        <Provider store={store}>
        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
        <Index />
        </ApplicationProvider>
        </ThemeContext.Provider>
        </Provider>
    );
}



export default App;
