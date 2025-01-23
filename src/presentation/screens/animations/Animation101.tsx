import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

export const Animation101 = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => console.log('??'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => console.log('??'));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
          },
        ]}
      />

      <Pressable onPress={fadeIn} style={{marginTop: 10}}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={fadeOut} style={{marginTop: 10}}>
        <Text>FadeOut</Text>
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
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
