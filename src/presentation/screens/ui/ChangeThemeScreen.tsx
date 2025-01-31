import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView globalMargin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{height: 10}} />
      <Button text="Dark" onPress={() => setTheme('dark')} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
