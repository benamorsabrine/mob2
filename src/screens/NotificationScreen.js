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
import { AuthContext } from "./../contexts/AuthContext";
import ScannerQR from "./ScannerQR";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import AppHeader from "../components/AppHeader";
const ReclamationScreen = () => {
  const [reclamations, setReclamations] = useState([]);
  const [reclamationId, setreclamationid] = useState(null);
  const { userInfo } = useContext(AuthContext);
  const [scannerVisible, setScannerVisible] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Accepter");

  const initialButtonStates = reclamations.map(() => ({
    buttonLabel: "Accepter",
  }));
  const [buttonStates, setButtonStates] = useState(initialButtonStates);

  const navigation = useNavigation();
  const openPhoneDialer = (telephone) => {
    const phoneUrl = `tel:${telephone}`;
    Linking.openURL(phoneUrl);
  };

  const HandleMap = () => {
    navigation.navigate("Map");
  };
  useEffect(() => {
    const fetchReclamations = async () => {
      try {
        const response = await fetch(
          "http://192.168.157.54:3000/api/rec/assigned-reclamations",
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
        const reclamationsAffectees = data.filter(
          (reclamation) => reclamation.etat === "accepté"
        );

        setReclamations(reclamationsAffectees);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchReclamations();
  }, [userInfo.token]);

  const handleButtonAccepter = async (index) => {
    try {
      const reclamationId = reclamations[index]._id;

      // Make a request to update the reclamation status on the server
      const url = `http://192.168.203.54::3000/api/rec/accepte/${reclamationId}/accepte`;
      console.log("Request URL:", url);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update reclamation status");
      }

      // Parse the response JSON
      const data = await response.json();

      // Log the updated status
      console.log("Status updated:", data.reclamation.etat);

      // Update the local state after a successful request
      // const updatedButtonStates = [...buttonStates];
      // updatedButtonStates[index].buttonLabel = "Debuter";

      // setButtonStates(updatedButtonStates);
      //setScannerVisible(true);
    } catch (error) {
      console.error("Error updating reclamation status:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  const handleButtonDebuter = async (index) => {
    try {
      const reclamationId = reclamations[index]._id;
      setreclamationid(reclamationId);
      // Make a request to update the reclamation status on the server
      const url = `192.168.203.54::3000/api/rec/debut/${reclamationId}/debut`;
      console.log("Request URL:", url);
      console.log("reclamationId", reclamationId);
      setreclamationid(reclamationId);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update reclamation status");
      }

      // Parse the response JSON
      const data = await response.json();

      console.log("Status updated:", data.reclamation.etat);

      setScannerVisible(true);
    } catch (error) {
      console.error("Error updating reclamation status:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    
   
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        ></View>
        {scannerVisible ? (
          <ScannerQR reclamationId={reclamationId} />
        ) : (
          <FlatList
            data={reclamations}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: 4 }}>
                    <View style={{ flexDirection: "row", marginBottom: "-40" }}>
                      <Text style={styles.te}>
                        <Ionicons
                          name="ios-business"
                          size={18}
                          color="gray"
                          style={styles.icon}
                        />
                        <Text style={styles.t}>Client :</Text> {item.client}
                      </Text>

                      <TouchableOpacity
                        style={{ backgroundColor: "red" }}
                        onPress={() => handleButtonAccepter(index)}
                      >
                        <Text style={styles.b}>Accepter</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{ backgroundColor: "red" }}
                        onPress={() => handleButtonDebuter(index)}
                      >
                        <Text style={styles.b}>Debuter</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.te}>
                      <Ionicons
                        name="location"
                        size={18}
                        color="gray"
                        style={styles.icon}
                      />
                      <Text style={styles.t}>Localisation :</Text>
                      {item.localisation}
                    </Text>
                    <Text style={styles.te}>
                      <Ionicons
                        name="ios-call"
                        size={18}
                        color="gray"
                        style={styles.icon}
                      />
                      <Text style={styles.t}>Telephone :</Text> {item.telephone}
                    </Text>
                  </View>
                </View>
                <View style={styles.separator}></View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: -15,
                    marginRight: 10,
                  }}
                >
                  <TouchableOpacity
                    style={styles.buttondown}
                    onPress={() => HandleMap()}
                  >
                    <Ionicons
                      name="location"
                      size={15}
                      color="gray"
                      style={styles.icon}
                    />
                    <Text style={styles.textdown}>Localisation</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttondown}
                    onPress={() => openPhoneDialer(item.telephone)}
                  >
                    <Ionicons
                      name="ios-call"
                      size={15}
                      color="gray"
                      style={styles.icon}
                    />
                    <Text style={styles.textdown}>Télephoner</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      
    </View>
    
  );
};

export default ReclamationScreen;

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
    marginTop: 120,
    paddingTop: parameters.statusBarHeight,
  },
  text: {
    //Tile reclamation aeffceté
    marginTop: 25,
    fontFamily: "Poppins-Regular",
    //fontStyle: "italic",
    // fontWeight: "100",
    fontSize: 23,
    marginTop: 25,
    color: "black",
    textAlign: "center",
  },
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "#696969",
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
