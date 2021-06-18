import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from './src/Containers/RootContainer';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/Redux/store';


export default function App() {
  return (
    <Provider store={store}>
        <PaperProvider>
          <RootContainer />
        </PaperProvider>
    </Provider>

  );
}


