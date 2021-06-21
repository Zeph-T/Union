import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Containers/login/Login';
import SignUp from '../Containers/Signup/SIgnup';
import AdminLogin  from '../Containers/AdminLogin/AdminLogin';

const Stack = createStackNavigator();

export default AuthNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="AdminLogin" component={AdminLogin}  />
        </Stack.Navigator>
    )
}