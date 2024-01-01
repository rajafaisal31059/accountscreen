import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const Contactinfo = ({}) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstcontainer}>
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
            marginLeft: 85,
          }}>
          Contact Info
        </Text>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <Image
          source={require('../assets/avatar.png')}
          style={{height: 140, width: 140, borderRadius: 25, opacity: 0.5}}
          lead-pencil
        />
        <Icon name="pencil" size={30} color="white" style={styles.icon}></Icon>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Name </Text>
        <Text style={{color: 'green', fontSize: 12}}>Change </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>Warren Buffet </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            opacity: 0.3,
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Birthdate </Text>
        <Text style={{color: 'green', fontSize: 12}}>Change </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>05 November 1993 </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            opacity: 0.3,
            marginTop: 10,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Gender </Text>
        <Text style={{color: 'green', fontSize: 12}}>Change </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>Male </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            opacity: 0.3,
            marginTop: 10,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Email </Text>
        <Text style={{color: 'green', fontSize: 12}}>Change </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>
          warren.buff@invest.ai{' '}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            opacity: 0.3,
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Phone Number </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>- </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            opacity: 0.3,
            marginTop: 10,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text style={{color: 'black', fontSize: 12}}>Address </Text>
      </View>
      <View style={{flexDirection: 'column', marginHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>- </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F9',
    flex: 1,
    paddingLeft: 10,
    // width: '100%',

    // height: '10%',

    // borderWidth:1
  },
  firstcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
  },
});
