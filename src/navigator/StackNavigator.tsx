import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
