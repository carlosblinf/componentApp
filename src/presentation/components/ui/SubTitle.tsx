import { View, Text } from "react-native";
import React from "react";
import { colors, globalStyles } from "@/config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TitleProps = {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
};

export default function SubTitle({
  text,
  safe,
  backgroundColor = colors.background,
}: TitleProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </Text>
  );
}
