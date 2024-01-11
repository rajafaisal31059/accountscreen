import React,{useEffect,useState,createContext,useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { setUser } from './userslice';
import { setProducts } from './productsSlice';

export const Notification = ({navigation}) => {

  const currentUser = auth().currentUser;
  const uid = currentUser.uid;

  const dispatch = useDispatch();

 //  document SNAPSHOT METHOD
  firestore()
  .collection('users')
  .doc(uid)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      const data= documentSnapshot.data()
      dispatch(setUser(data))
    }
  });


  // AXIOS CODE IM WORKING ON HERE
  
//   axios.get('https://dummyjson.com/products?limit=5', {
//   responseType: 'json',
// })
//   .then(response => {
//     const products = response.data
//     dispatch(setProducts(products))

//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

  const notifications = [
    {
      image: require('../assets/pic1.png'),
      text: 'Apple stocks just increased. Check it out now',
      righttext: '15min ago',
    },
    {
      image: require('../assets/pic2.png'),
      text: 'Check out today’s best investor. You’ll learn from him',
      righttext: '3min ago',
    },
    {
      image: require('../assets/pic3.png'),
      text: 'Where do you see yourself in the next ages.',
      righttext: '30sec ago',
    },
  ];

  const renderItem = ({item}) => {
    return (
      
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 100,
          width: 330,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
          Horitonztal: 20,
        }}>
        <Image
          source={item.image}
          style={{height: 70, width: 70, borderRadius: 20, paddingLeft: 5}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            height: 100,
            width: 180,
            paddingTop: 25,
            paddingLeft: 5,
          }}>
          {item.text}
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.4)',
            fontSize: 12,
            width: 70,
            height: 100,
            paddingTop: 20,
          }}>
          {item.righttext}
        </Text>
        
      
  
      </View>
      
    );
  };

  


  return (
    <View style={styles.container}>
      <View style={styles.firstcontainer}>
        <Icon
          name="chevron-back-sharp"
          size={30}
          color="black"
          style={{paddingTop: 30}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: 34,
            marginTop: 25,
          }}>
          Notification
        </Text>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
      {/* <Button title="TEST" onPress={()=>{
        navigation.navigate('context');
      }} /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 20,
  },
  firstcontainer: {
    flexDirection: 'column',
  },
});
