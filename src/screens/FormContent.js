import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function FormContent({
  handleButtonCloturer,
  formData,
  setFormData,
  scanTime,
}) {
  return (
    <View>
      <Text style={styles.title}>Fiche Intervention</Text>
      <View style={{ flexDirection: "row", marginTop: 20, fontSize: 40 }}>
        <View>
          <Text style={styles.label}>Numero Rapport :</Text>
          <Text style={styles.label}>type :</Text>
          <Text style={styles.label}>client :</Text>
          <Text style={styles.label}>Heure Debut :</Text>
          <Text style={styles.label}>Heure Cloture :</Text>
          <Text style={styles.label}>Action Envisagée:</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Numero Rapport"
            onChangeText={(text) =>
              setFormData({ ...formData, numRapport: text })
            }
            value={formData.numRapport}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Type"
            onChangeText={(text) => setFormData({ ...formData, type: text })}
            value={formData.type}
            autoCapitalize="words"
            autoCorrect={true}
          />

          <TextInput
            style={styles.input}
            placeholder="client"
            onChangeText={(text) => setFormData({ ...formData, client: text })}
            value={formData.client}
            autoCapitalize="sentences"
            autoCorrect={true}
          />

          <TextInput
            style={styles.input}
            placeholder="HeureDebut"
            onChangeText={(text) =>
              setFormData({ ...formData, heureDebut: text })
            }
            value={scanTime}
            editable={false}
          />

          <TextInput
            style={styles.input}
            placeholder="HeureCloture"
            onChangeText={(text) =>
              setFormData({ ...formData, heureCloture: text })
            }
            value={new Date().toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            editable={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter description"
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) =>
              setFormData({ ...formData, description: text })
            }
            value={formData.description}
            autoCapitalize="sentences"
            autoCorrect={true}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonCloturer(index)}
      >
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

// Add styles as needed
const styles = {
  title: {
    color: "red",
    marginLeft: 80,
    fontFamily: "Poppins-Bold",
    fontSize: 17,
  },
  button: {
    backgroundColor: "red",
    marginTop: 30,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    width: 120,
    marginLeft: 100,
  },
};
