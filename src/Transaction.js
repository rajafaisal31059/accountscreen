import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useGetProductsQuery } from './api';
import {selectUser} from './userslice';

export const Transaction = () => {
  const count = useSelector(state => state.counter.value);
  const userData = useSelector(state => state.user.value);

  // These are axios implementation
  // const productData = useSelector(state => state.product.value);
  // console.log(JSON.stringify(productData.products, null, 2));

  const { data: { products } = {}  } = useGetProductsQuery();
 


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
      
      {/* <Text style={{color: 'black'}}>TEST:{products[3].price}</Text> */}


       {/* This flatlist method is for axios implementation */}
      {/* <FlatList
        data={productData.products}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      /> */}
     {/* <Text style={{color: 'black'}}>TEST: {products} </Text> */}

      <FlatList
        data={products}
        renderItem={renderProducts}
        keyExtractor={item => item.id.toString()} // Assuming item.id is a number
      />
    
      

      
    </View>
  );
};
