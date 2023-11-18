import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AllFacilitiesScreen from '../Screens/DrawerScreens/AllFacilitiesScreens/AllFacilitiesScreen';
import FacilityDetailsScreen from '../Screens/DrawerScreens/AllFacilitiesScreens/FacilityDetailsScreen';

const AllFacilitiesStack = () => {
        const stack = createNativeStackNavigator();

        return (
            <stack.Navigator>
              <stack.Screen 
        name="AllFacilities"
        component={AllFacilitiesScreen}
        options={{title: "All Facilities", headerShown: false}}
        />
                <stack.Screen name="FacilityDetails" component={FacilityDetailsScreen} 
                screenOptions={{
    
                    presentation: 'modal',
                    gestureDirection: "horizontal-inverted",
                    animation:'slide_to_top'
                                }}/>
    
    
            </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AllFacilitiesStack;
