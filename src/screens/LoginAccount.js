
import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButtton';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { setUser } from '../redux/userslice';
import { useDispatch } from 'react-redux';


const LoginAccount = ({ navigation }) => {
  const dispatch=useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(  (user) => {
      if (user) {
     
        navigation.navigate('Menu');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  const loginUser = async () => {
    try {
      
      const userCredential = await auth().signInWithEmailAndPassword(
        email.trim(),
        password,
      );
      const { user } = userCredential;
      
      setEmail('');
      setPassword('');
      setMessage('Sign-In Successful');

      setTimeout(() => {
        setMessage('');
        navigation.navigate('Menu');
      }, 3000);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setMessage('No user found with this email address!');
      } else if (error.code === 'auth/wrong-password') {
        setMessage('Incorrect Password Entered!');
      } else {
        setMessage('Error during sign-in');
      }

      setTimeout(() => {
        setMessage('');
      }, 3000);

      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{`Enter your Email & Password`}</Text>
        <Text style={styles.text1}>{'Login to get started.'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#A9A9A9"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={loginUser}
          title="Sign In"
          height={60}
          width={320}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Reg');
          }}
          style={styles.loginButton}>
          <Text style={styles.buttonText}>Dont have an account?</Text>
        </TouchableOpacity>

        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

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
  message: {
    width: '60%',
    marginVertical: 20,
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default LoginAccount;




