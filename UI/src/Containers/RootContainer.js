import React from 'react';
import { useSelector } from 'react-redux'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContainer from './AuthContainer';
import AppContainer from './AppContainer';
import AdminContainer from './AdminContainer';

const RootStack = createStackNavigator();

const RootContainer = () => {
    const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <RootStack.Navigator
                headerMode="none"
            >
                {
                    isLoggedIn ? (isAdmin === false ? (
                        <RootStack.Screen
                            name="App"
                            component={AppContainer}
                        />) : (
                        <RootStack.Screen
                            name="Admin"
                            component={AdminContainer}
                        />
                    )) :
                        <RootStack.Screen
                            name="Auth"
                            component={AuthContainer}
                        />
                }
                <RootStack.Screen name="Auth" component={AuthContainer} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootContainer;