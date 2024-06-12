import { globalStyles } from "@/config/theme/theme";
import { ReactNode } from "react";
import { View, StyleProp, ViewStyle } from "react-native";

type ViewProps = {
  style?: StyleProp<ViewStyle>;
  withMarginView?: boolean;
  children: ReactNode;
  styleInnerView?: StyleProp<ViewStyle>;
};
export default function ContainerView({
  style,
  children,
  styleInnerView,
  withMarginView = false,
}: ViewProps) {
  return (
    <View style={[globalStyles.mainContainer, style]}>
      {withMarginView ? (
        <View style={[globalStyles.globalMargin, styleInnerView]}>
          {children}
        </View>
      ) : (
        <>{children}</>
      )}
    </View>
  );
}
