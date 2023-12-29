import React, { useState, useEffect, useContext, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import { AuthContext } from "../contexts/AuthContext";
import SearchBar from "../components/SerachBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import SerachFilter from "../components/SerachFilter";
import AppHeader from "../components/AppHeader";
import TabNavigator from "../navigation/TabNavigator";
const EquipementScreen = () => {
  const [equipements, setEquipements] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const [equipementId, setequipementid] = useState(null);
  const { userInfo } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  // const [scannerVisible, setScannerVisible] = useState(false);
  // const [buttonLabel, setButtonLabel] = useState("Accepter");

  const navigation = useNavigation();
  useEffect(() => {
    const fetchEquipements = async () => {
      try {
        const response = await fetch(
          "http://192.168.157.54:3000/api/equi/all",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Log the entire response for debugging purposes
        console.log("Server Response:", data);

        if (!data || !Array.isArray(data)) {
          console.error("Invalid response format. Expected an array.");
          return;
        }

        // Assuming the data structure is correct, proceed with further processing

        setEquipements(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchEquipements();
  }, [userInfo.token]);

  return (
    <View style={styles.container}>
      <AppHeader></AppHeader>

      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />
      <SerachFilter
        data={equipements}
        input={searchPhrase}
        setInput={setSearchPhrase}
      />
    </View>
  );
};

export default EquipementScreen;

const styles = StyleSheet.create({
  icon: { marginRight: 1, marginTop: 7, marginLeft: 40 },
  separator: {
    height: 0.2,
    width: 370, // Vous pouvez ajuster la largeur en conséquence
    backgroundColor: "gray", // Couleur grise
    marginVertical: 1,
    marginLeft: -20,
    marginTop: 8, // Espace au-dessus et en dessous de la ligne
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 50,
    padding: 9,
    paddingTop: parameters.statusBarHeight,
  },
  text: {
    //Tile reclamation aeffceté

    fontFamily: "Poppins-Regular",
    //fontStyle: "italic",
    // fontWeight: "100",
    fontSize: 23,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 5,
    color: "black",
    textAlign: "center",
  },
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  te: {
    // marginTop:-20,
    fontFamily: "Poppins-Light",
    fontSize: 15,
    color: "#696969",
  },
  etat: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: -5,
  },
  card: {
    //  marginTop: 10,
    borderRadius: 15, // This might be a string value like '0.75rem' in React Native
    padding: 16, // Use a numeric value for padding
    cursor: "pointer",
    backgroundColor: "#f1f1f3",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03, // Adjust the shadow opacity
    shadowRadius: 16, // Adjust the shadow radius
    position: "relative",
    height: 146,
    marginTop: 20,
  },
  b: {
    color: colors.white,
    textAlign: "center",
    paddingTop: 8,
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },
  button: {
    borderRadius: 10,
    width: 90,
    height: 40,
    marginLeft: 230,

    marginTop: -30,
  },

  textdown: {
    color: "gray",
    paddingLeft: 9,
    paddingTop: 7,
    fontSize: 12,
    fontFamily: "Poppins-Light",
  },
  buttondown: {
    borderWidth: 0.5, // Add a very thin border
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: "white",
    //marginTop: 5,
    width: 182,
    height: 30,
    //backgroundColor: colors.tunisys,
    flexDirection: "row",
  },
  image: {
    width: 18,
    height: 18,
    //  marginRight:90,
  },
  etatAffecte: {
    color: "#4169e1",
    // marginTop:5,
  },
  etatDebute: {
    color: "green",
  },
  etatDefault: {
    color: "black",
  },
});
