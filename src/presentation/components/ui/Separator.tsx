import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

export const SpaceSeparator = () => <View style={{ marginTop: 30 }} />;
export const LinearSeparator = ({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) => <View style={[styles.separator, style]} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.4,
  },
});
