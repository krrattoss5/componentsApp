import 'react-native-gesture-handler';
import React, {PropsWithChildren, useContext} from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigator/StackNavigator';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppState>{children}</AppState>
    </ThemeProvider>
  );
};

const AppState = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>{children}</NavigationContainer>
  );
};

export const App = () => {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  );
};
