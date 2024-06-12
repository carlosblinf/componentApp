import { View, StyleSheet, Animated } from "react-native";
import { colors } from "@/config/theme/theme";
import AnimateButton from "@/presentation/components/ui/buttons/AnimateButton";
import { useAnimation } from "@/presentation/hooks/useAnimation";

export default function Animation101Screen() {
  const { fadeIn, fadeOut, animatedOpacity, animatedTop, movingFromTop } =
    useAnimation();

  function handleFadeIn() {
    fadeIn({});
    movingFromTop({ initialPosition: -150, duration: 800 });
  }

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
        <AnimateButton text="FadeIn" action={() => handleFadeIn()} />
        <AnimateButton text="FadeOut" action={() => fadeOut({})} />
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
