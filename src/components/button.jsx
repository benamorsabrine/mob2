import React from 'react';
import { TouchableOpacity, Text , StyleSheet } from 'react-native';

function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cc1d45',
    padding: 12,
    borderRadius: 10,
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
    marginLeft:100
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:'Poppins-Bold'
  },
});

export default CustomButton;
