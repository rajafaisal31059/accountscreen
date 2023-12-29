import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const BankAccount = () => {
  bankitems = [
    {
      image: require('../assets/b1.png'),
      boldtext: 'Bank of Amrica - 0182128xxx',
      regulartext: 'Jonas Macroni',
      icon: 'options-vertical',
    },
    {
      image: require('../assets/b2.png'),
      boldtext: 'Zenith Bank - 0182128xxx',
      regulartext: 'Jonas Macroni',
      icon: 'options-vertical',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginLeft: 3,
          height: 110,
          width: 320,
          borderRadius: 15,
          backgroundColor: 'white',
          elevation: 0.5,
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={item.image}
          style={{height: 50, width: 50, marginLeft: 20}}></Image>
        <View style={{flexDirection: 'column', width: 200}}>
          <Text style={{color: 'black', fontSize: 13, fontWeight: '900'}}>
            {item.boldtext}
          </Text>
          <Text style={{color: 'black', fontSize: 12}}>{item.regulartext}</Text>
        </View>
        <Icon1
          name={item.icon}
          size={25}
          color={'black'}
          style={{paddingRight: 10, paddingBottom: 50}}></Icon1>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.firstcontainer, {marginTop: 25}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-sharp"
            size={25}
            color="black"
            style={{paddingTop: 30}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: 17,
            marginTop: 25,
            marginLeft: 65,
          }}>
          {`Bank Account Info`}
        </Text>
      </View>

      <FlatList
        data={bankitems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={{
          height: 70,
          width: 290,
          backgroundColor: '#31A062',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
          marginHorizontal: 15,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Add Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    paddingLeft: 20,
    // width: '100%',

    // height: '10%',

    // borderWidth:1
  },
  firstcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
