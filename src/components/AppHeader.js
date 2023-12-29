import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Reclamations" component={ReclamationScreen} />
    </Stack.Navigator>
  );
};
const AppHeader = () => {
  const navigation = useNavigation();

  const handleBell = () => {
    // Navigate to the "Reclamations" screen
    navigation.navigate("Notification");
  };

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction
        color={Colors.white}
        style={{ marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content> </Appbar.Content>

      <Appbar.Action
        icon="bell"
        color={Colors.white}
        style={{ marginBottom: 10 }}
        onPress={handleBell}
      />
      <Appbar.Action
        icon="menu"
        color={Colors.white}
        style={{ marginBottom: 10,width:25,height:25 }}
        onPress={() => navigation.openDrawer()}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#e95a69",
  },
});

export default AppHeader;
