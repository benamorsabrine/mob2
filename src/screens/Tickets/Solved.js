import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppHeader from "../../components/AppHeader";

const Solved = () => {
  return (
    <View>
      <AppHeader></AppHeader>
      <Text style={{ fontSize: 25, marginLeft: 80, marginTop: 20 }}>
        Solved Tickets
      </Text>
    </View>
  );
};

export default Solved;

const styles = StyleSheet.create({});
