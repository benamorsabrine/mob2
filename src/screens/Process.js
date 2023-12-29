import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { useContext } from "react";
import AppHeader from "../components/AppHeader";
import { AuthContext } from "../contexts/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

const Process = ({ navigation }) => {
  const [reclamations, setReclamations] = useState([]); // État local pour stocker les réclamations
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
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
        console.log("Full data object:", data);

        // Check the structure of the data object and set the reclamations state
        if (Array.isArray(data) && data.length > 0) {
          setReclamations(data);
        } else {
          console.warn("No reclamations found.");
          setReclamations([]);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de la base de données",
          error
        );
      }
    };

    fetchData();
  }, [userInfo.token]);

  const getButtonColor = (etat) => {
    if (etat === "accepté") {
      return "#f61f87";
    } else if (etat === "debuté") {
      return "blue";
    } else if (etat === "en cours") {
      return "#ffb823";
    } else if (etat === "finalise") {
      return "green";
    } else if (etat === "reporte") {
      return "gray";
    } else {
      return "black";
    }
  };

  const navigateToDetailsScreen = (etat, reclamation) => {
    switch (etat) {
      case "accepté":
        navigation.navigate("AcceptRapport", {
          client: reclamation.client,
          telephone: reclamation.telephone,
          localisation: reclamation.localisation,
          equipement: reclamation.equipement,
          type: reclamation.type,
        });
        break;
      case "reporte":
        navigation.navigate("ReporteRapport", {
          client: reclamation.client,
          telephone: reclamation.telephone,
          localisation: reclamation.localisation,
          equipement: reclamation.equipement,
          type: reclamation.type,
        });
        break;
      case "en cours":
        navigation.navigate("SolvingRapport", {
          client: reclamation.client,
          telephone: reclamation.telephone,
          localisation: reclamation.localisation,
          equipement: reclamation.equipement,
          type: reclamation.type,
        });
        break;
      // Add more cases as needed
      default:
        // Default navigation
        navigation.navigate("DefaultDetails", {
          client: reclamation.client,
          telephone: reclamation.telephone,
          localisation: reclamation.localisation,
        });
        break;
    }
  };

  return (
    <View>
      <AppHeader></AppHeader>
      {reclamations.map((reclamation, index) => (
        <Card key={index}>
          <Text style={styles.te}>
            <Text style={styles.t}>Client:</Text> {reclamation.client}
          </Text>

          <Text style={styles.te}>
            <Text style={styles.t}>Telephone:</Text> {reclamation.telephone}
          </Text>
          <Text style={styles.te}>
            <Text style={styles.t}>Localisation:</Text>{" "}
            {reclamation.localisation}
          </Text>

          <Button
            title={reclamation.etat}
            buttonStyle={{
              backgroundColor: getButtonColor(reclamation.etat),
              width: 100,
              height: 30,
              marginLeft: 220,
              paddingTop: -17,
            }}
            onPress={() =>
              navigateToDetailsScreen(reclamation.etat, reclamation)
            }
          />
        </Card>
      ))}
    </View>
  );
};

export default Process;

const styles = StyleSheet.create({
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  te: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    color: "black",
  },
});
