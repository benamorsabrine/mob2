import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import app from "../../assets/images/load.png";
import ass from "../../assets/images/good.png";
import rej from "../../assets/images/new.png";

const TicketScreen = () => {
  const navigation = useNavigation();
  const handleImagePress = () => {
    // Navigate to the desired screen when the image is pressed
    navigation.navigate("YourScreenName"); // Replace "YourScreenName" with the actual screen name you want to navigate to
  };

  return (
    <View>
      <AppHeader />
      <View
        style={{
          flexDirection: "column",
          marginTop: 20,
          padding: 20,
        }}
      >
        <View>
          <TouchableOpacity
            style={[styles.button, { width: "100%" }]}
            onPress={handleImagePress}
          >
            <Image
              source={app} // Replace with the actual path to your image
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.t}>ApprovalTicket</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, { width: "100%" }]}
            onPress={handleImagePress}
          >
            <Image
              source={ass} // Replace with the actual path to your image
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.t}>Assign Tickets</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={[styles.button, { width: "100%" }]}
          onPress={handleImagePress}
        >
          <Image
            source={rej} // Replace with the actual path to your image
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.t}>RejectedTicket</Text>
      </View>
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  image: {
    width: 70, // Adjust the width based on your preference
    height: 50,
    resizeMode: "cover",
    borderRadius: 10, // Adjust the resizeMode based on your preference
  },
  button: {
    marginRight: 10,
     // Center the button content horizontally
  },
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "#696969",
  },
});
