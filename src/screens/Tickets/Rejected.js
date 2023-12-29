import React from "react";
import { View } from "react-native";
import AppHeader from "../../components/AppHeader";
const Rejected = () => {
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

export default Rejected;
