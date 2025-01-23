import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ({duration = 300, toValue = 1, callBack = () => {}}) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 600,
    //   useNativeDriver: true,
    //   easing: Easing.bounce, // Easing.elastic(2),
    // }).start(() => console.log('??'));

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };

  const fadeOut = ({duration = 300, toValue = 0, callBack = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);

    // }).start(() => animatedTop.resetAnimation());
  };

  const startMovingTopPosition = ({
    inicialPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    animatedTop.setValue(inicialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callBack);
  };

  return {
    // Poperties
    animatedOpacity,
    animatedTop,
    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
