import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import HomeStudent from './src/Containers/home_student/homeStudent';
import Login from './src/Containers/login/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeStudent} />
      </Stack.Navigator>
    </NavigationContainer>  );
}


export default App;