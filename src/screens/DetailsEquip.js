import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "../components/AppHeader";

const DetailsEquip = ({ route }) => {
  const { equipmentDetails } = route.params;
  console.log("Received Equipment Details:", equipmentDetails);

  return (
    <>
      <AppHeader></AppHeader>
      <View style={styles.container}>
        <Text style={styles.text}>Equipment Details</Text>

        <Text style={styles.t}>
          Num Serie:
          <Text style={{ color: "#313134" }}>{equipmentDetails.num_serie}</Text>
        </Text>

        <Text style={styles.t}>
          Marque:
          <Text style={{ color: "#313134" }}>{equipmentDetails.marque}</Text>
        </Text>

        <Text style={styles.t}>Model Pc:  <Text style={{ color: "#313134" }}>{equipmentDetails.model_pc}</Text></Text>
        <Text style={styles.t}>Type ecran: {equipmentDetails.type_ecran}</Text>
        <Text style={styles.t}>
          date_mise_service: {equipmentDetails.date_mise_service}
        </Text>
        <Text style={styles.t}>
          date_visite_pre: {equipmentDetails.date_visite_pre}
        </Text>
        <Text style={styles.t}>
          date_installation_physique :
          {equipmentDetails.date_installation_physique}
        </Text>
        <Text style={styles.t}>
          date_transferte :{equipmentDetails.date_transferte}
        </Text>
        <Text style={styles.t}>modele_pc :{equipmentDetails.modele_pc}</Text>
        <Text style={styles.t}>modele :{equipmentDetails.modele}</Text>
        <Text style={styles.t}>os :{equipmentDetails.os}</Text>
        <Text style={styles.t}>nb_camera :{equipmentDetails.nb_camera}</Text>
        <Text style={styles.t}>type_ecran :{equipmentDetails.type_ecran}</Text>
        <Text style={styles.t}>nb_casette :{equipmentDetails.nb_casette}</Text>
        <Text style={styles.t}>
          version_application :{equipmentDetails.version_application}
        </Text>
        <Text style={styles.t}>
          version_application :{equipmentDetails.version_application}
        </Text>
      </View>
    </>
  );
};

export default DetailsEquip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 23,
    marginLeft: 15,
    marginBottom: 5,
    color: "black",
    textAlign: "center",
  },
  t: {
    fontFamily: "Poppins-Light",
    fontSize: 17,
    color: "black",
    marginBottom: 5,
  },
});
