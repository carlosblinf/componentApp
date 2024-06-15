import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React from "react";
import ContainerView from "@/presentation/components/ui/ContainerView";
import Title from "@/presentation/components/ui/Title";
import SubTitle from "@/presentation/components/ui/SubTitle";
import { colors } from "@/config/theme/theme";
import FadeInImage from "@/presentation/components/ui/FadeInImage";

export default function InfiniteScrollScreen() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newNumbers = Array.from(
      { length: 5 },
      (_, i) => numbers.length + 1 + i,
    );
    console.log(newNumbers);
    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 2000);
  };

  return (
    <ContainerView>
      <Title text="Infinite Scroll" />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <Item number={item} />}
        ListFooterComponent={() => (
          <View
            style={{
              height: 100,
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </ContainerView>
  );
}

function Item({ number }: { number: number }) {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
  );
}
