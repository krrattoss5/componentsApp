import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  globalMargin?: boolean;
}

export const CustomView = ({children, style, globalMargin = false}: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        style,
        globalMargin ? globalStyles.globalMargin : null,
      ]}>
      {children}
    </View>
  );
};
