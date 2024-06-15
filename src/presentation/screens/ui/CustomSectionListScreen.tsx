import { View, Text, SectionList, useWindowDimensions } from "react-native";
import React from "react";
import ContainerView from "@/presentation/components/ui/ContainerView";
import Card from "@/presentation/components/ui/Card";
import Title from "@/presentation/components/ui/Title";
import { houses } from "@/config/data/sectionListData";
import SubTitle from "@/presentation/components/ui/SubTitle";
import { colors } from "@/config/theme/theme";
import { LinearSeparator } from "@/presentation/components/ui/Separator";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomSectionListScreen() {
  const { height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  console.log(bottom);
  return (
    <ContainerView margin>
      <Title text="Character list" />
      <Card>
        <SectionList
          sections={houses}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Text style={{ marginVertical: 2 }}>{item}</Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SubTitle text={title} backgroundColor={colors.cardBackground} />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={LinearSeparator}
          ListHeaderComponent={() => <Title text="Characters" />}
          ListFooterComponent={() => (
            <Title text={`Sections: ${houses.length}`} />
          )}
          showsVerticalScrollIndicator={false}
          style={{ height: height - top - bottom - 180 }}
        />
      </Card>
      <Text>CustomSectionListScreen</Text>
    </ContainerView>
  );
}
