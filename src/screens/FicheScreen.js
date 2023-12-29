import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Fiche = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    numRapport: "",
    type: "",
    client: "",
    heureDebut: "",
    heureCloture: "",
    description: "",
  });
  const handleSave = async () => {
    try {
      // Make a POST request to the API endpoint
      const response = await fetch("http://192.168.157.54::3000/api/inter/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Parse and log the saved data
        const savedData = await response.json();
        console.log("Data saved successfully:", savedData);

        // Handle the success, e.g., navigate to another screen
      } else {
        const errorData = await response.json(); // Parse the error response
        console.error("Error saving data:", errorData.error);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>numRapport :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numRapport"
        onChangeText={(text) => setFormData({ ...formData, numRapport: text })}
        value={formData.numRapport}
        autoCapitalize="none" // Optional: set to "none" if you don't want auto capitalization
        autoCorrect={false} // Optional: set to false if you don't want auto correction
        keyboardType="numeric" // Optional: set the keyboard type
      />

      <Text style={styles.label}>type :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter type"
        onChangeText={(text) => setFormData({ ...formData, type: text })}
        value={formData.type}
        autoCapitalize="words" // Optional: set to "words" if you want auto capitalization for words
        autoCorrect={true} // Optional: set to true if you want auto correction
      />

      <Text style={styles.label}>client :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter client"
        onChangeText={(text) => setFormData({ ...formData, client: text })}
        value={formData.client}
        autoCapitalize="sentences" // Optional: set to "sentences" if you want auto capitalization for sentences
        autoCorrect={true}
      />

      <Text style={styles.label}>Heure Debut :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter heureDebut"
        onChangeText={(text) => setFormData({ ...formData, heureDebut: text })}
        value={formData.heureDebut}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Heure Cloture :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter heureCloture"
        onChangeText={(text) =>
          setFormData({ ...formData, heureCloture: text })
        }
        value={formData.heureCloture}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setFormData({ ...formData, description: text })}
        value={formData.description}
        autoCapitalize="sentences"
        autoCorrect={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Fiche;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    padding: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
