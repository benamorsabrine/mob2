import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppHeader from "../../components/AppHeader";

const Solving = () => {
  return (
    <View>
      <AppHeader></AppHeader>
      <Text style={{ fontSize: 25, marginLeft: 80, marginTop: 20 }}>
        Solving Tickets
      </Text>
    </View>
  );
};

export default Solving;

const styles = StyleSheet.create({});
