import React, { useRef, useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import filedticket from "../../assets/images/filedticket.png";
import phoneticket from "../../assets/images/phoneticket.png";
import process from "../../assets/images/process.png";
import equip from "../../assets/images/equip.png";
import alertes from "../../assets/images/alertes.png";
import profile from "../../assets/images/profil.png";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
import * as Location from "expo-location";
import { AuthContext } from "../contexts/AuthContext";
import AppHeader from "../components/AppHeader";
const HomeScreen = ({ navigation }) => {
  const handlePrfoile = () => {
    navigation.navigate("Profile");
  };
  const { userToken, userInfo } = useContext(AuthContext);
  //console.log("token",userToken)

  const handleImagePress = () => {
    // Navigate to the desired screen when the image is pressed
    navigation.navigate("YourScreenName"); // Replace "YourScreenName" with the actual screen name you want to navigate to
  };

  const [latlng, setLatLng] = useState({});

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {}
  };
  const _map = useRef(1);
  useEffect(() => {
    checkPermission();
    getLocation(),
      //console.log(latlng)
      [];
  });

  return (
    <View>
      <AppHeader />

      <View
        style={{
          flexDirection: "row",
          marginLeft: 50,
          marginTop: 50,
          padding: 20,
        }}
      >
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FieldTicket")}
          >
            <Image
              source={filedticket} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>FieldTickets</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PhoneTicket")}
          >
            <Image
              source={phoneticket} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>PhoneTickets</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 50,
          marginTop: 20,
          padding: 20,
        }}
      >
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Process")}
          >
            <Image
              source={process} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>Process</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Equipements")}
          >
            <Image
              source={equip} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>Equipement</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 50,
          marginTop: 20,
          padding: 20,
        }}
      >
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Alertes")}
          >
            <Image
              source={alertes} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>Alertes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              source={profile} // Replace with the actual path to your image
              style={styles.image}
            />
            <Text style={styles.t}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 9,
    paddingTop: parameters.statusBarHeight,
  },
  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },
  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: colors.tunisys,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
  },
  image: {
    width: 100, // Adjust the width based on your preference
    height: 100, // Adjust the height based on your preference
    resizeMode: "cover",
    borderRadius: 30, // Adjust the resizeMode based on your preference
  },
  button: {
    marginRight: 40,
  },
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "#696969",
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
