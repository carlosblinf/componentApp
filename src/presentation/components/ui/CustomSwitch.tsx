import { colors } from "@/config/theme/theme";
import { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

type SwitchProps = {
  text?: string;
  isOn: boolean;
  onChange: (value: string) => void;
};
export default function CustomSwitch({ text, isOn, onChange }: SwitchProps) {
  return (
    <View style={[styles.switchRow]}>
      {text && <Text style={{ color: colors.text, fontSize: 16 }}>{text}</Text>}
      <Switch
        trackColor={{ false: "#767577", true: "purple" }}
        thumbColor={Platform.OS === "android" ? colors.primary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});
