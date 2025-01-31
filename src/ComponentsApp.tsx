import 'react-native-gesture-handler';
import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigator/StackNavigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};
