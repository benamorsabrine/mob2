import { View, Text } from "react-native";
import React from "react";
import AppHeader from "./AppHeader";

const Home = () => {
  return (
    <View>
      <AppHeader
        title="Home"
        menu
        rightFunction={() => console.log("right")}
        optionalFunc={() => console.log("optionalFunc")}
      ></AppHeader>
    </View>
  );
};

export default Home;
