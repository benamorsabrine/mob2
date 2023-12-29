import React, { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { Card, TextInput, Button, Text, Dialog } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

const ReporteRapport = ({ route }) => {
  const { client, telephone, localisation, equipement, type } = route.params;
  const [user, setUser] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [numRapport, setNumRapport] = useState("");
  const [description, setDescription] = useState("");
  const [isDialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    console.log("Client:", client);
    console.log("Téléphone:", telephone);
    console.log("Localisation:", localisation);
    console.log("Equipement", equipement);
    console.log("type :", type);
  }, [client, telephone, localisation, equipement]);

  const handleSave = () => {
    // Logique pour sauvegarder l'intervention
    console.log("User:", user);
    console.log("Date de début:", dateDebut);
    console.log("Date de fin:", dateFin);
    console.log("Type:", type);
    console.log("Client:", client);
    console.log("Numéro de rapport:", numRapport);
    console.log("Description:", description);
    Alert.alert(
      "Reporter",
      "Votre ticket a été transférée vers la coordinatrice de service ",
      [{ text: "OK", onPress: () => setDialogVisible(false) }],
      { cancelable: false }
    );
  };

  return (
    <>
      <AppHeader></AppHeader>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={{ fontSize: 20, marginLeft: 90, color: "#5d676a" }}>
                Fiche Intervention
              </Text>
              <Text style={styles.label}>User</Text>
              <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                style={styles.input}
              />
              <View style={styles.dateContainer}>
                <View style={{ width: 170 }}>
                  <Text style={styles.label}>Date de début</Text>
                  <TextInput
                    value={dateDebut}
                    onChangeText={(text) => setDateDebut(text)}
                    style={[styles.input, styles.dateInput]}
                  />
                </View>

                <View style={{ width: 170 }}>
                  <Text style={styles.label}>Date de début</Text>
                  <TextInput
                    value={dateDebut}
                    onChangeText={(text) => setDateDebut(text)}
                    style={[styles.input, styles.dateInput]}
                  />
                </View>
              </View>
              <Text style={styles.label}>Type Intervention</Text>
              <TextInput
                value={type}
                onChangeText={(text) => setType(text)}
                style={styles.input}
                editable={false}
              />
              <Text style={styles.label}>Client</Text>
              <TextInput
                value={client}
                onChangeText={(text) => setClient(text)}
                style={styles.input}
                editable={false}
              />
              <Text style={styles.label}>Equipement</Text>
              <TextInput
                value={equipement}
                onChangeText={(text) => setEquipement(text)}
                style={styles.input}
                editable={false}
              />
              <Text style={styles.label}>Localisation</Text>
              <TextInput
                value={localisation}
                onChangeText={(text) => setlocalisation(text)}
                style={styles.input}
                editable={false}
              />
              <Text style={styles.label}>Description</Text>
              <TextInput
                value={description}
                onChangeText={(text) => setDescription(text)}
                style={styles.input}
              />
            </Card.Content>
            <Card.Actions style={styles.buttonContainer}>
              <Button style={{ backgroundColor: "gray" }} onPress={handleSave}>
                <Text style={{ color: "white" }}> Reporter</Text>
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setDialogVisible(false)}
      >
        <Dialog.Title>Confirmation</Dialog.Title>
        <Dialog.Content></Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setDialogVisible(false)}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 16,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#495458",
  },
  input: {
    marginVertical: 8,
    fontFamily: "Poppins-Regular",
    backgroundColor: "white",
    color: "#495458",
    borderRadius: 5,
    height: 40,
  },
  dateContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    height: 70,
  },
  dateInput: {
    flex: 1,
    marginRight: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    // backgroundColor: "red",
  },
});

export default ReporteRapport;
