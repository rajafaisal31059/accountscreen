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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import bcrypt from 'react-native-bcrypt';

const Register = ({navigation}) => {
  const createUser = async () => {
    try {
      const authResult = await auth().createUserWithEmailAndPassword(email.trim(), password);

     
     
     // This is my firestore section
      const hashedPassword = bcrypt.hashSync(password, 10);

      await firestore().collection('users').doc(authResult.user.uid).set({
        name:name,
        email: email.trim(),
        password:hashedPassword
       
      });

      setMessage('Account Created.');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        setMessage('');
        navigation.navigate('login');
      }, 2000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('That email address is already in use!');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }

      if (error.code === 'auth/invalid-email') {
        setMessage('That email address is invalid!');

        setTimeout(() => {
          setMessage('');
        }, 3000);
      }

      console.error(error);
    }
  };

  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{`Create an account`}</Text>
        <Text style={styles.text1}>{'Invest and double your income now'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={createUser}
          title="Register "
          height={60}
          width={320}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('login');
          }}
          style={styles.loginButton}>
          <Text style={styles.buttonText}>Already have an account ?</Text>
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
    fontSize: 34,
    width: 320,
    alignSelf: 'center',
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

export default Register;
