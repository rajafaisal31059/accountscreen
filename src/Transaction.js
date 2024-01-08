import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';

import { selectUser } from './userslice';



export const Transaction = () => {
  
  const count = useSelector(state => state.counter.value); 
  const userData = useSelector((state) => state.user.value);

  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', paddingLeft:20}}>
      <Text style={{color: 'black'}}>Count: {count}</Text>
      <Text style={{color: 'black'}}>User Name:{userData.name}</Text>
      <Text style={{color: 'black'}}>Email:{userData.email}</Text>
      <Text style={{color: 'black'}}>User ID:{userData.UserID}</Text>
    </View> 
  );
};
