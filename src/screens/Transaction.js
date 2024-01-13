import { Avatar, Button, Card } from 'react-native-paper';
import React from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useGetProductsQuery} from '../redux/api';
import {selectUser} from '../redux/userslice';

import {useDataContext} from '../context';

export const Transaction = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const count = useSelector(state => state.counter.value);
  const userData = useSelector(state => state.user.value);

  // These are Axios implementation
  // const productData = useSelector(state => state.product.value);
  // console.log(JSON.stringify(productData.products, null, 2));

  // This is RTK Query implementation
  const { data: { products } = {}  } = useGetProductsQuery();

  //This is useContext implementation
  // const {products} = useDataContext();
  // console.log(JSON.stringify(products.products, null, 2));

  const renderProducts = ({item, index}) => {
    return (
      <View style={styles.flatlistview}>
        {/* <View styles={styles.items}>
          <Text style={styles.textstyle}>ID: {item.id}</Text>
          <Text style={styles.textstyle}>TITLE: {item.title}</Text>
          <Text style={styles.textstyle}>PRICE: {item.price}</Text>
          <Text style={styles.textstyle}>DESCRIPTION: {item.description}</Text>
        </View> */}

<Card style={{marginVertical:10,borderRadius:30}}>
    <Card.Title title={item.id} subtitle={item.title}   />
    <Card.Content>
      <Text variant="titleLarge" style={{color:'black',textAlign:'justify',fontFamily:'Montserrat-Regular'}} >Price: {item.price}</Text>
      <Text variant="bodyMedium" style={{color:'black',textAlign:'justify',fontFamily:'Montserrat-Regular'}}>{item.description}</Text>
    </Card.Content>
  </Card>
      </View>
    );
  };

  return (
    <ScrollView>
    <View
    style={{
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal:15
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

      {/* This is for RTK Query implementation */}
      
      <FlatList
        data={products}
        renderItem={renderProducts}
        keyExtractor={item => item.id.toString()} 
      />

      {/* // This is the useContext api method */}
      {/* <FlatList
        data={products.products}
        renderItem={renderProducts}
        keyExtractor={item => item.id.toString()} 
        contentContainerStyle={styles.flatlistContainer}
      /> */}



    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingTop: 20, // Adjust as needed
    paddingBottom: 20, // Adjust as needed
  },
  flatlistview: {
   textAlign:'justify'
  },
  items: {
 
  },
  textstyle: {
    color: 'black',
    fontFamily: 'Montserrat-regular',
    fontSize: 14,
  },
});