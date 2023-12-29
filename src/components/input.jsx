import React from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";

function InputField(props) {
  const { label, extra, type, placeholder, variant } = props;

  return (
    <View style={extra}>
      <Text style={styles.text}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type === "email" ? "email-address" : "default"}
        secureTextEntry={type === "password"} // Added for password input
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontFamily:'Poppins-Bold',
    marginLeft: 20,
    fontSize: 18,
  },
  input : {
    marginLeft: 20,
    fontFamily:'Poppins-Light',
    padding: 12,
    borderWidth: 1,
    borderColor: "black", // Changed from `border` and `box-shadow`
    borderRadius: 10,
    marginTop: 2,
    height: 50,
    width: "90%",
    fontSize: 15,
    color: "dimgray",
  },
})

