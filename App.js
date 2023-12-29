import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Reanimated from "react-native-reanimated";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RoootNavigator from "./src/navigation/rootNavigator";
import AuthProvider from "./src/contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AppStack";
import AppStack from "./src/navigation/AppStack";
import AppNav from "./src/navigation/AppNav";

const App = () => {
  SplashScreen.preventAutoHideAsync();

  // Make sure to await SplashScreen.hideAsync()
  SplashScreen.hideAsync();

  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/Poppins/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("./assets/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Italic": require("./assets/Poppins/Poppins-Italic.ttf"),
    "Poppins-Black": require("./assets/Poppins/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("./assets/Poppins/Poppins-BlackItalic.ttf"),
    "Poppins-Regular": require("./assets/Poppins/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return;
    <AppLoading />;
  }
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
