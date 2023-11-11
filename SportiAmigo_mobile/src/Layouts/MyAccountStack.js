import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MyAccount from '../Screens/DrawerScreens/MyAccountScreens/MyAccount';
import UpdateInfoField from '../Components/UpdateInfoField';
import InfoUpdateScreen from '../Screens/DrawerScreens/MyAccountScreens/InfoUpdateScreen';




const MyAccountStack = () => {

    const stack = createNativeStackNavigator();

    return (
        <stack.Navigator>
            <stack.Screen name="MyAccount" component={MyAccount} />
            <stack.Screen name="UpdateInfo" component={InfoUpdateScreen}  
            screenOptions={{

                presentation: 'modal',
                gestureDirection: "horizontal-inverted",
                animation:'slide_to_top'
                            }}/>


        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MyAccountStack;
