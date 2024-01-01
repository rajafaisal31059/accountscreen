import React, {useState} from 'react';
import CustomButton from './CustomButtton';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginAccount = ({navigation}) => {
 
 
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

  // const handleTextInputChange = inputText => {
  //   setText(inputText);
  // };
  // const handleEmailChange = inputEmail => {
  //   setEmail(inputEmail);
  // };
  // const handlePasswordChange = inputPassword => {
  //   setPassword(inputPassword);
  // };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{`Enter your Email & Password`}</Text>
        <Text style={styles.text1}>{'Log-In to get started.'}</Text> 
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#A9A9A9"
          onChangeText={text=>setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={text=>setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={() => navigation.navigate('Menu')}
          title="Log-In"
          height={60}
          width={320}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Reg')
          }}
          style={styles.loginButton}>
          <Text style={styles.buttonText}>Dont have an account?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },

  input: {
    color: 'black',
    width: 320,
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  loginButton: {
    alignItems: 'center',

    marginTop: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    width: 320,
    
    textAlign: 'center',
    marginTop: 20,
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    width: 320,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 60,
  },
  buttonText: {
    width: 400,
    color: 'green',
    textAlign: 'center',
  },
});

export default LoginAccount;
