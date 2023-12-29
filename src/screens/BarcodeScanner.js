import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function BarcodeScanner({ onBarCodeScanned }) {
  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={onBarCodeScanned}
      />
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    height: width * 0.7,
    width: width * 0.7,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "transparent",
  },
});
