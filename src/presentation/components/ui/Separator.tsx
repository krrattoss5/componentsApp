import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View style={[style, styles.separator]} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    backgroundColor: colors.text,
    height: 1,
    width: '80%',
    marginVertical: 10,
  },
});
