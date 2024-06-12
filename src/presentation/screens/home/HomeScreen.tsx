import { View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Title from "@/presentation/components/ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "@/presentation/components/ui/menu/itemsData";
import CustomView from "@/presentation/components/ui/CustomView";
import RenderMenu from "@/presentation/components/ui/menu/RenderMenu";

const Separator = () => <View style={{ marginTop: 30 }} />;

export default function HomeScreen() {
  return (
    <CustomView withMargin>
      <ScrollView>
        <Title text="Opciones" />
        <RenderMenu menu={animationMenuItems} />
        <Separator />
        <RenderMenu menu={menuItems} />
        <Separator />
        <RenderMenu menu={uiMenuItems} />
      </ScrollView>
    </CustomView>
  );
}
