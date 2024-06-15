import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import React from "react";
import ContainerView from "@/presentation/components/ui/ContainerView";
import Title from "@/presentation/components/ui/Title";

export default function PullToRefreshScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3500);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["red", "orange", "green"]}
          title="refreshing"
          tintColor={"blue"}
        />
      }
    >
      <ContainerView margin>
        <Title text="Pull to refresh" />
      </ContainerView>
    </ScrollView>
  );
}
