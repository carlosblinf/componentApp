import { View, Text, Modal, Alert, Pressable, StyleSheet } from "react-native";
import React from "react";
import ContainerView from "@/presentation/components/ui/ContainerView";
import Title from "@/presentation/components/ui/Title";
import CustomModal, {
  stylesModal,
} from "@/presentation/components/ui/CustomModal";

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ContainerView margin>
      <Title text="Modal" />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Pressable
        style={[stylesModal.button, stylesModal.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylesModal.textStyle}>Show Modal</Text>
      </Pressable>
    </ContainerView>
  );
}
