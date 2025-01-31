import React, {PropsWithChildren, useContext} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View style={[style, styles.separator, {backgroundColor: colors.text}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '80%',
    marginVertical: 10,
  },
});
