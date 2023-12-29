import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ModalContent({
  formVisible,
  setFormVisible,
  handlecloture,
  showForm,
  handleButtonCloturer,
  formData,
  setFormData,
  scanTime,
}) {
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          setFormVisible(false);
          handlecloture();
        }}
      >
        <Ionicons name="close-circle" size={30} color="red" />
      </TouchableOpacity>
      {/* ... Other content */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 350,
    alignItems: "center",
    height: 500,
  },
  closeButton: {
    position: "absolute",
    top: 7,
    right: 9,
    padding: 10,
    zIndex: 1,
  },
  // ... Other styles
});
