import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {selectUser} from './userslice';

export const Transaction = () => {
  const count = useSelector(state => state.counter.value);
  const userData = useSelector(state => state.user.value);
  const productData = useSelector(state => state.product.value);
  console.log(JSON.stringify(productData.products, null, 2));


  const renderProducts = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}>
          ID: {item.id}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}>
          TITLE: {item.title}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}>
           PRICE: {item.price}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}>
          
          DESCRIPTION: {item.description}
        </Text>
       


        
         
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 20,
        flexDirection: 'column',
      }}>
      <Text style={{color: 'black'}}>Count: {count}</Text>
      <Text style={{color: 'black'}}>User Name:{userData.name}</Text>
      <Text style={{color: 'black'}}>Email:{userData.email}</Text>
      <Text style={{color: 'black'}}>User ID:{userData.UserID}</Text>

      <FlatList
        data={productData.products}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
