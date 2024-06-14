import { ScrollView } from "react-native";
import React from "react";
import Title from "@/presentation/components/ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "@/presentation/components/ui/menu/itemsData";
import ContainerView from "@/presentation/components/ui/ContainerView";
import RenderMenu from "@/presentation/components/ui/menu/RenderMenu";
import { SpaceSeparator } from "@/presentation/components/ui/Separator";

export default function HomeScreen() {
  return (
    <ContainerView>
      <ScrollView>
        <Title text="Options" />
        <RenderMenu menu={animationMenuItems} />
        <SpaceSeparator />
        <RenderMenu menu={menuItems} />
        <SpaceSeparator />
        <RenderMenu menu={uiMenuItems} />
      </ScrollView>
    </ContainerView>
  );
}
