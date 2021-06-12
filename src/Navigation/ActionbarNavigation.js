import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddEvent from '../Containers/AddEvent/AddEvent';
import AddNotification from '../Containers/AddNotification/AddNotification';
import HomeAdmin from '../Containers/home_admin/homeAdmin'

const Stack = createStackNavigator();

export default ActionBarNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeAdmin} />
      <Stack.Screen name="addEvent" component={AddEvent} />
      <Stack.Screen name="addNotification" component={AddNotification} />
    </Stack.Navigator>
  );
};
