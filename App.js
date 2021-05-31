import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootContainer from './src/Containers/RootContainer';
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
    <RootContainer />
    </PaperProvider>
  );
}


