import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResetPassword from '../Containers/ResetPassword/ResetPassword';
import BugReport from '../Containers/BugReport/BugReport';
import ReachUs from '../Containers/Reachus/reachus';
import AdminProfile from '../Containers/admin_profile/AdminProfile';

const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={AdminProfile} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ReachUs" component={ReachUs} />
      <Stack.Screen name="BugReport" component={BugReport} />
    </Stack.Navigator>
  );
};
