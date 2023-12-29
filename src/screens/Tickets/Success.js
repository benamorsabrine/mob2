import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppHeader from "../../components/AppHeader";

const Success = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <View>
        <Text style={{ fontSize: 25, marginLeft: 80, marginTop: 20 }}>
          Success Tickets
        </Text>
      </View>
    </>
  );
};

export default Success;

const styles = StyleSheet.create({});
