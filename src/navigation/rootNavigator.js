import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AppStack from "./AppStack";
import PhoneTicket from "../screens/PhoneTicket";
import FieldTicket from "../screens/FieldTicket";
import CustomDrawer from "../components/CustomDrawer";
//import LoginScreen from '../screens/LoginScreen';

export default function RoootNavigator() {
  //const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#e95a69",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontFamily: "Poppins-Light",
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen name="Home" component={MainTabNavigator} />
        <Drawer.Screen name="App" component={AppStack} />
        <Drawer.Screen name="HomeStack" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
