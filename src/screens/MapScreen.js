import React, { useRef, useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
import * as Location from "expo-location";
import { AuthContext } from "../contexts/AuthContext";
const MapScreen = ({ navigation }) => {
  const { userToken, userInfo } = useContext(AuthContext);
  //console.log("token",userToken)

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
    <View style={styles.container}>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        //customMapStyle={mapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
      ></MapView>
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },

  map: {
    height: "100%",
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
});
