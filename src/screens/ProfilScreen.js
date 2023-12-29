import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Card,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors, parameters } from "../global/styles";
import { AuthContext } from "./../contexts/AuthContext";

const ProfileScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const email = userInfo.email;
        console.log(email);

        if (!email) {
          throw new Error("No email found in AsyncStorage");
        }

        const response = await fetch(
          `http://192.168.157.54::3000/api/user/email/${email}`
        );

        if (!response.ok) {
          throw new Error("Failed to retrieve user profile data");
        }

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paramétres de profile</Text>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.t}>Nom : </Text>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              readOnly
              id="lastname"
              type="text"
              name="lastname"
              value={user?.lastname || ""} // Set the value to user.lastname if it exists
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.t}>Prénom : </Text>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              value={user?.firstname || ""} // Set the value to user.lastname if it exists
              onChangeText={(text) => setPassword(text)}
              autoCompleteType="password"
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.t}>Adresse Email </Text>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              value={user?.email || ""} // Set the value to user.lastname if it exists
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.t}> Role : </Text>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              value={user?.role || ""} // Set the value to user.lastname if it exists
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.t}> Mot de passe </Text>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              readOnly
              style={styles.input}
              value={user?.password || ""} // Set the value to user.lastname if it exists
            />
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  text: {
    marginTop: 25,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: colors.tunisys,
    textAlign: "center",
  },
  t: {
    marginLeft: 25,
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    padding: 5,
  },
  input: {
    marginLeft: 25,
    fontSize: 15,
    padding: 5,
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    color: colors.grey1,
    fontFamily: "Poppins-Light",
  },
});
