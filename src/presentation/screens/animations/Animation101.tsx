import React, {useContext} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/UseAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {globalStyles} from '../../../config/theme/theme';

export const Animation101 = () => {
  const {colors} = useContext(ThemeContext);
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
            backgroundColor: colors.primary,
          },
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            inicialPosition: -100,
            easing: Easing.bounce,
            duration: 750,
          });
        }}
        style={{marginTop: 10}}>
        <Text style={[globalStyles.subTitle, {color: colors.text}]}>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text style={[globalStyles.subTitle, {color: colors.text}]}>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
