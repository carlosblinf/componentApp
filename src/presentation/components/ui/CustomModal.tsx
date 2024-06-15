import { View, Text, Modal, Alert, Pressable, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";

type ModalProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

export default function CustomModal({
  modalVisible,
  setModalVisible,
}: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={stylesModal.centeredView}>
        <View style={stylesModal.modalView}>
          <Title text="Modal content" />
          <Pressable
            style={[stylesModal.button, stylesModal.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={stylesModal.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
export const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
