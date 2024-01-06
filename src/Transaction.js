import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';



export const Transaction = () => {
  
  const count = useSelector(state => state.counter.value);

  const count1 = useSelector(state => state.user.value);
  console.log(count1,'test')

  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Count: {count}</Text>
      <Text style={{color: 'black'}}>User Name:{count1}</Text>
    </View> 
  );
};
