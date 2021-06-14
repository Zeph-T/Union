import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StudentProfile from '../Containers/student_profile/StudentProfile';
import Suggestions from '../Containers/Suggestions/Suggestions';
import ResetPassword from '../Containers/ResetPassword/ResetPassword';
import BugReport from '../Containers/BugReport/BugReport';
import ReachUs from '../Containers/Reachus/reachus';

const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={StudentProfile} />
      <Stack.Screen name="Suggestions" component={Suggestions} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ReachUs" component={ReachUs} />
      <Stack.Screen name="BugReport" component={BugReport} />
    </Stack.Navigator>
  );
};
