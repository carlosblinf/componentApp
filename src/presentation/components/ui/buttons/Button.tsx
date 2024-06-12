import { colors, globalStyles } from "@/config/theme/theme";
import { Text, Pressable, StyleProp, ViewStyle } from "react-native";

type ButtonProps = {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
};
export default function Button({ text, onPress, style }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style,
      ]}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
