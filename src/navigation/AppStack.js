// Import necessary modules
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfilScreen";
import ReclamationScreen from "../screens/NotificationScreen";
import Colors from "../constants/Colors";
import EquipementScreen from "../screens/EquipementScreen";
import FieldTicketScreen from "../screens/FieldTicket";
import TicketScreen from "../screens/TicketScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PhoneTicket from "../screens/PhoneTicket";
import HomeStack from "../navigation/TabNavigator";
// Create navigators
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Define your TabNavigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#e95a69",
        },
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack} // Change this to your desired Home screen
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Define your DrawerNavigator
const AppStack = () => {
  return (
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
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reclamation"
        component={ReclamationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="alert-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={TicketScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="document-text-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Equipements"
        component={EquipementScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-settings" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
