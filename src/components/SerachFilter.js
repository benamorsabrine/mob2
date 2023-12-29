import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";
import { useNavigation } from "@react-navigation/native";

const SerachFilter = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  const navigateToDetails = (item) => {
    navigation.navigate("DetailsEquip", { equipmentDetails: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          // Si l'input n'est pas vide et le numéro de série ne correspond pas, retournez null
          if (input !== "" && !item.num_serie.includes(input)) {
            return null;
          }

          // Si l'input est vide ou le numéro de série correspond, affichez l'équipement
          return (
            <View style={styles.card}>
              <Text style={styles.te}>
                <Text style={styles.t}>Num Serie :</Text> {item.num_serie}
              </Text>
              <Text style={styles.te}>
                <Text style={styles.t}>Marque :</Text> {item.marque}
              </Text>
              <Text style={styles.te}>
                <Text style={styles.t}>Model Pc :</Text> {item.modele_pc}
              </Text>
              <Text style={styles.te}>
                <Text style={styles.t}>Type ecran :</Text> {item.type_ecran}
              </Text>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {
                  navigateToDetails(item);
                }}
              >
                <Text style={styles.detailsButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default SerachFilter;

const styles = StyleSheet.create({
  detailsButton: {
    marginTop: 10,
   // backgroundColor: "black",
    borderRadius: 8,
    padding: 10,
    marginLeft: 240,
  },
  detailsButtonText: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 50,
    padding: 9,
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
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  te: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    color: "#696969",
  },
  card: {
    borderRadius: 15,
    padding: 16,
    cursor: "pointer",
    backgroundColor: "#f1f1f3",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    position: "relative",
    height: 160,
    marginTop: 10,
  },
});
