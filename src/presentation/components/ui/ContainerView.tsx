import { globalStyles } from "@/config/theme/theme";
import { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";

type ViewProps = {
  style?: StyleProp<ViewStyle>;
  margin?: boolean;
  children: ReactNode;
};
export default function ContainerView({
  style,
  children,
  margin = false,
}: ViewProps) {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        style,
      ]}
    >
      {children}
    </View>
  );
}
