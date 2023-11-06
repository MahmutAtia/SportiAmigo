import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 // Import your registration step components
import Step1 from '../Screens/RegistrationFlowScreens/RegisterStep1';

const Stack = createStackNavigator();

const RegistrationFlow = () => {
  return (
    <Stack.Navigator initialRouteName="Step1">
      <Stack.Screen name="Step1" component={Step1} />
      {/* Add screens for other registration steps here */}
    </Stack.Navigator>
  );
};

export default createAppContainer(RegistrationFlow);
