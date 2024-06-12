import { View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Title from "@/presentation/components/ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "@/presentation/components/ui/menu/itemsData";
import ContainerView from "@/presentation/components/ui/ContainerView";
import RenderMenu from "@/presentation/components/ui/menu/RenderMenu";

const Separator = () => <View style={{ marginTop: 30 }} />;

export default function HomeScreen() {
  return (
    <ContainerView withMarginView>
      <ScrollView>
        <Title text="Opciones" />
        <RenderMenu menu={animationMenuItems} />
        <Separator />
        <RenderMenu menu={menuItems} />
        <Separator />
        <RenderMenu menu={uiMenuItems} />
      </ScrollView>
    </ContainerView>
  );
}
