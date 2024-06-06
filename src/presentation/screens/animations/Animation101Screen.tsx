import { View, StyleSheet, Alert, Animated, Easing } from "react-native";
import React, { useRef } from "react";
import { colors } from "@/config/theme/theme";
import AnimateButton from "@/presentation/components/ui/buttons/AnimateButton";

export default function Animation101Screen() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-150)).current;

  const handleFadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 800,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const handleFadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

  return (
    <View style={styles.container}>
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
          },
        ]}
      />
      <View style={styles.containerButton}>
        <AnimateButton text="FadeIn" action={handleFadeIn} />
        <AnimateButton text="FadeOut" action={handleFadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
  containerButton: {
    flexDirection: "row",
    width: "100%",
    // height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 20,
  },
});
