import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import Title from "@/presentation/components/ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "@/presentation/components/ui/menu/itemsData";
import MenuItem from "@/presentation/components/ui/menu/MenuItem";

const Separator = () => <View style={{ marginTop: 30 }} />;

export default function HomeScreen() {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Opciones" />
          {animationMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}
          <Separator />
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
          <Separator />
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={item.component}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
