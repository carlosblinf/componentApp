import { View, Text, Animated, PanResponder } from "react-native";
import React, { useRef } from "react";
import { stylesAnimated } from "./Animation101Screen";

export default function Animation102Screen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });

  return (
    <View style={[stylesAnimated.container]}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), stylesAnimated.purpleBox]}
      />
    </View>
  );
}
