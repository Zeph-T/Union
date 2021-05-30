import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer }from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthContainer from './AuthContainer';
import AppContainer from './AppContainer';
 

const RootStack = createStackNavigator();

const RootContainer = () =>{
    return(
        <NavigationContainer>
            <RootStack.Navigator
            headerMode="none"
            >
            <RootStack.Screen name="Auth" component={AuthContainer} />
            <RootStack.Screen name="App" component={AppContainer}   />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootContainer;