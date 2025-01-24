import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';
import {Animation101} from '../presentation/screens/animations/Animation101';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreenScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101} />
    </Stack.Navigator>
  );
};
