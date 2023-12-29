import React, { useState ,useContext} from "react";
import { View, Image, StyleSheet,Text,TextInput} from "react-native";
import pic from "../../assets/auth.png";
import { colors } from "../global/styles";
import CustomButton from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "./../contexts/AuthContext";
const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <Text style={styles.text}>
        Adresse Email
      </Text>
      <TextInput
        label="Adresse Email"
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.text}>
        Mot de passe
      </Text>
        <TextInput
         label="Mot de passe"
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
      <CustomButton title="Login" onPress={()=>{
          login(email,password)
        }} />
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 20,
  },
  errorMessage:{
    color:'red',
    marginLeft:60,
    fontFamily:'Poppins-Light',
  },
  textInput:{
    marginLeft: 20,
    fontFamily:'Poppins-Light',
    padding: 12,
    borderWidth: 1,
    borderColor: "black", 
    borderRadius: 10,
    marginTop: 2,
    height: 50,
    width: "90%",
    fontSize: 15,
    color: "dimgray"
  },
  image: {
    width: 250,
    height: 250,
    justifyContent: "center",
    marginLeft: 65,
    marginTop: 50,
  },
  text:{
    padding: 10,
    fontFamily:'Poppins-Bold',
    marginLeft: 20,
    fontSize: 18,
  }
});
