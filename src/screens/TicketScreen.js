import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import app from "../../assets/images/2799194.png";
import load from "../../assets/images/3182980.png";
import done from "../../assets/images/1039130.png";
import approv from "../../assets/images/6697176.png";
import rej from "../../assets/images/2909526.png";
import solv from "../../assets/images/2799179.png";

const TicketScreen = () => {
  const navigation = useNavigation();
  const handleImagePress = () => {
    // Navigate to the desired screen when the image is pressed
    navigation.navigate("YourScreenName"); // Replace "YourScreenName" with the actual screen name you want to navigate to
  };

  return (
    <View>
      <AppHeader />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Assign")}
        >
          <View style={styles.buttonContent}>
            <Image
              source={app} // Replace with the actual path to your image
              style={{ width: 35, height: 35, marginTop: 20 }}
            />
            <Text style={styles.text}>Assigned Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Solving")}
        >
          <View style={styles.buttonContent}>
            <Image
              source={load} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.text}>Solving Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Solved")}
        >
          <View style={styles.buttonContent}>
            <Image
              source={solv} // Replace with the actual path to your image
              style={{ width: 35, height: 35, marginTop: 20 }}
            />
            <Text style={styles.text}>Solved Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Rej")}
        >
          <View style={styles.buttonContent}>
            <Image
              source={rej} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.text}>Rejected Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Image
              source={approv}
              // Replace with the actual path to your image
              style={{ width: 40, height: 40, marginTop: 20 }}
            />
            <Text style={styles.text}>Success Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Approv")}
        >
          <View style={styles.buttonContent}>
            <Image
              source={done} // Replace with the actual path to your image
              style={{ width: 35, height: 35, marginTop: 20 }}
            />
            <Text style={styles.text}>Approval Tickets</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  button: {
    //width: "550", // Set the width to 100% to make the button take the full width
    height: 75,
    borderRadius: 7,
    backgroundColor: "#e3e4e7",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    fontWeight: "600",
    color: "#414246", // Change the text color based on your design
    marginLeft: 10, // Adjust the margin based on your preference
    marginTop: 24,
  },
});
