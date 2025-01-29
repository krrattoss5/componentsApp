import React from 'react';
import {CustomView} from './CustomView';
import {Title} from './Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from './Button';
import {Alert, View} from 'react-native';
import {showPrompt} from '../../../config/theme/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

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

  const onShowPrompt = () => {
    showPrompt({
      title: 'Enter password',
      subtitle: 'Enter your password to claim your $1.5B in lottery winnings',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      prompType
      : 'secure-text',
      defaultValue: 'sdfasdfasfsdfasdf',
      placeholder: 'placeholder',
    });

    // ! solo funciona en IOS
    // Alert.prompt(
    //   'Correo electronico',
    //   'Lorem ipsum dolor sit amet',
    //   (value: string) => console.log({value}),
    //   'secure-text',
    //   'Soy el texto por defecto!',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alert - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
      <View style={{height: 10}} />
    </CustomView>
  );
};
