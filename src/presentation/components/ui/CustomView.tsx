import React, {ReactNode, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  globalMargin?: boolean;
}

export const CustomView = ({children, style, globalMargin = false}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        {backgroundColor: colors.background},
        style,
        globalMargin ? globalStyles.globalMargin : null,
      ]}>
      {children}
    </View>
  );
};
