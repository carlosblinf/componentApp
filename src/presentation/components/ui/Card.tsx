import { colors } from "@/config/theme/theme";
import { ReactNode } from "react";
import { View, ViewStyle, StyleProp } from "react-native";

type CardProps = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
export default function Card({ style, children }: CardProps) {
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          padding: 10,
          borderRadius: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
