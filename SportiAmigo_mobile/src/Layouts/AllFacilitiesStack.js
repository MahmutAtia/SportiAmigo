import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AllFacilitiesScreen from '../Screens/AllFacilitiesScreens/AllFacilitiesScreen';

const AllFacilitiesStack = () => {
        const stack = createNativeStackNavigator();

        return (
            <stack.Navigator>
              <stack.Screen 
        name="AllFacilities"
        component={AllFacilitiesScreen}
        options={{title: "All Facilities"}}
        />
                {/* <stack.Screen name="UpdateInfo" component={InfoUpdateScreen}  
                screenOptions={{
    
                    presentation: 'modal',
                    gestureDirection: "horizontal-inverted",
                    animation:'slide_to_top'
                                }}/>
     */}
    
            </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AllFacilitiesStack;
