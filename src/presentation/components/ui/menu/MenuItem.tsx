import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/config/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type MenuItemProps = {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
};
export default function MenuItem({
  name,
  icon,
  component,
  isFirst,
  isLast,
}: MenuItemProps) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(component)}>
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 10,
          }),
          ...(isLast && {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingBottom: 10,
          }),
        }}
      >
        <Ionicons
          name={icon}
          size={25}
          style={{ marginRight: 10, color: colors.primary }}
        />
        <Text style={{ color: colors.text }}>{name}</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          style={{ marginLeft: "auto", color: colors.primary }}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
