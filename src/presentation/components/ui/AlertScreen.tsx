import React from 'react';
import {CustomView} from './CustomView';
import {Title} from './Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from './Button';
import {Alert, View} from 'react-native';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alert - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={() => {}} />
      <View style={{height: 10}} />
    </CustomView>
  );
};
