import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { DrawerNavigator } from "./DrawerNavigator";
import { AuthContext } from "../contexts/AuthContext";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import AppContainer from "./AppStack";
const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppContainer /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNav;
