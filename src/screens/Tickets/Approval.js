import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppHeader from "../../components/AppHeader";

const Approval = () => {
  return (
    <View>
      <AppHeader></AppHeader>
      <Text style={{ fontSize: 25, marginLeft: 80, marginTop: 20 }}>
        Approved Tickets
      </Text>
    </View>
  );
};

export default Approval;

const styles = StyleSheet.create({});
