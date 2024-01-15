import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const SmallButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Invest Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 125,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#663399',
  },
  buttonText: {
    fontSize: 16,
    color: '#663399',
    fontWeight: 'bold',
    fontFamily:'Montserrat-Regular'
  },
});

export default SmallButton;
