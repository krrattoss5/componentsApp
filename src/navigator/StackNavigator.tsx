import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';
import {Animation101} from '../presentation/screens/animations/Animation101';
import {Animation102Screen} from '../presentation/screens/animations/Animation102Screen';
import {SwitchScreen} from '../presentation/screens/switches/SwitchScreen';
import {AlertScreen} from '../presentation/screens/alerts/AlertScreen';
import {TextInputScreen} from '../presentation/screens/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../presentation/screens/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../presentation/screens/ui/CustomSectionListScreen';
import {ModalScreen} from '../presentation/screens/ui/ModalScreen';
import {InfiniteScrollScreen} from '../presentation/screens/ui/InfiniteScrollScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreenScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
