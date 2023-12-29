import React from "react";
import { View, Text } from "react-native";
import AppHeader from "../../components/AppHeader";

const Assign = () => {
  return (
    <View>
      <AppHeader></AppHeader>
      <Text style={{ fontSize: 25, marginLeft: 80, marginTop: 20 }}>
        Assigned Tickets
      </Text>
    </View>
  );
};

export default Assign;
