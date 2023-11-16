import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from '../Screens/DrawerScreens/HomeScreens/HomeScreen';
import SportClickScreen from '../Screens/DrawerScreens/HomeScreens/SportClickScreen';
import FaciltyDetailsScreen from '../Screens/DrawerScreens/HomeScreens/FaciltyDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = () => {
    const stack = createNativeStackNavigator();

    return (
        <stack.Navigator>
            <stack.Screen name="HomeScreen" component={HomeScreen} />
            <stack.Screen name="SportClickScreen" component={SportClickScreen}/>
            <stack.Screen name="FaciltyDetailsScreen" component={FaciltyDetailsScreen}  />

        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;