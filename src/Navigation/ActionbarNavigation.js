import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddEvent from '../Containers/AddEvent/AddEvent';
import AddNotification from '../Containers/AddNotification/AddNotification';
import HomeStudent from '../Containers/home_student/homeStudent';

const Stack = createStackNavigator();

export default ActionBarNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeStudent} />
      <Stack.Screen name="addEvent" component={AddEvent} />
      <Stack.Screen name="addNotification" component={AddNotification} />
    </Stack.Navigator>
  );
};
