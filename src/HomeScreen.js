import React from 'react';
import CustomButton from './CustomButtton';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.text1}>Stay on top of your </Text>
        <Text style={styles.text2}>finance with us.</Text>
        <Text style={[styles.text3, {marginTop: 22}]}>
          We are your new financial Advisors
        </Text>
        <Text style={styles.text3}>to recommend the best investments for</Text>
        <Text style={styles.text3}>you.</Text>

        <CustomButton
          onPress={() => navigation.navigate('Reg')}
          title="Create Account"
          height={60}
          width={320}
        />

        <TouchableOpacity
          onPress={() => {
            console.log('Login');
          }}
          style={styles.loginButton}>
          <Text style={styles.buttonText}>Loginn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    width: 260,
    height: 273,
    resizeMode: 'contain',
  },
  text1: {
    fontSize: 34,
    color: 'black',
    fontWeight: '700',
    textAlign: 'justify',
    fontFamily: 'DMSans',
  },
  text2: {
    fontSize: 34,
    color: 'black',
    fontWeight: '700',
    textAlign: 'justify',
    fontFamily: 'DMSans',
  },
  text3: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
    textAlign: 'justify',
    fontFamily: 'SF-Pro-Text',
  },
  loginButton: {
    marginTop: 10,
  },
  buttonText: {
    color: '#31A062',
  },
});

export default HomeScreen;
