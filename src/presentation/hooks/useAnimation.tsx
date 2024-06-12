import { useRef } from "react";
import { Animated, Easing } from "react-native";

export function useAnimation() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  function fadeIn({ toValue = 1, duration = 300, callback = () => {} }) {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  }

  function fadeOut({ toValue = 0, duration = 300, callback = () => {} }) {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
    // () => animatedTop.resetAnimation()
  }

  function movingFromTop({
    initialPosition = 0,
    toValue = 0,
    duration = 500,
    easing = Easing.bounce,
    callback = () => {},
  }) {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      easing,
      useNativeDriver: true,
    }).start(callback);
  }

  return {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    movingFromTop,
  };
}
