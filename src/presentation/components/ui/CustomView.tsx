import { globalStyles } from "@/config/theme/theme";
import { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";

type ViewProps = {
  style?: StyleProp<ViewStyle>;
  withMargin?: boolean;
  children: ReactNode;
  styleInnerView?: StyleProp<ViewStyle>;
};
export default function CustomView({
  style,
  children,
  styleInnerView,
  withMargin = false,
}: ViewProps) {
  return (
    <View style={[globalStyles.mainContainer, style]}>
      {withMargin ? (
        <View style={[globalStyles.globalMargin, styleInnerView]}>
          {children}
        </View>
      ) : (
        { children }
      )}
    </View>
  );
}
