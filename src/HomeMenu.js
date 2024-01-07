import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SmallButton from './SmallButton';
import Icon3 from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
const HomeMenu = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert('Log-out', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Log-out',
        onPress: () => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
          navigation.navigate('Home');
        },
      },
    ]);
  };

  const images = [
    {
      image: require('../assets/card1.png.png'),
    },
    {
      image: require('../assets/card2.png.png'),
    },
    {
      image: require('../assets/card1.png.png'),
    },
    {
      image: require('../assets/card2.png.png'),
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        <View
          style={{
            width: 130,
            height: 170,

            borderRadius: 10,
          }}>
          <Image source={item.image}></Image>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.icons}>
            <Icon name="menu-sharp" size={25} color="black" />

            <TouchableOpacity onPress={handleLogout}>
              <Icon1 name="log-out" size={25} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('notification');
              }}>
              <Icon1 name="bell" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.text1}>Welcome, Jessie.</Text>

        <View style={styles.greenboxContainer}>
          <LinearGradient
            colors={['#31A078', '#31A05F']}
            style={styles.greenbox}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Text style={styles.text2}>Your total asset portfolio</Text>

            <View style={styles.insideBox}>
              <Text style={styles.text4}>N203,935</Text>

              <SmallButton></SmallButton>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.container3}>
            <Text style={styles.text22}>{'Best Plans'}</Text>
          </View>
          <View style={styles.container4}>
            <Text style={styles.textWithIcon}>
              {'See All'}
              <Icon3
                name="arrowright"
                size={20}
                color="#FE555D"
                style={styles.icon}
              />
            </Text>
          </View>
        </View>

        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}></FlatList>

        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: '700',
            marginTop: 20,
            marginLeft: 30,
            fontWeight: 900,
            fontFamily:'Montserrat-Regular'
          }}>
          Investment Guide
        </Text>

        <View style={styles.rowContainer33}>
          <View style={styles.imageAndTextContainer}>
            <View style={styles.textgroup}>
              <Text style={{color: '#4F4F4F', fontSize: 18, fontWeight: '900', fontFamily:'Montserrat-Regular'}}>
                Basic type of investments
              </Text>
              <Text style={{color: 'black', fontSize: 14, fontFamily:'Montserrat-Regular'}}>
                This is how you set your foot for 2020 Stock market recession.
                What’s next...
              </Text>
            </View>
            <Image
              source={require('../assets/eclipse.png')}
              style={{height: 60, width: 60}}
            />
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(74, 74, 74, 0.5)',
            marginVertical: 10,
            marginHorizontal: 25,
          }}></View>

        <View style={styles.rowContainer33}>
          <View style={styles.imageAndTextContainer}>
            <View style={styles.textgroup}>
              <Text style={{color: '#4F4F4F', fontSize: 18, fontWeight: '900', fontFamily:'Montserrat-Regular'}}>
                How much can you start wit..
              </Text>
              <Text style={{color: 'black', fontSize: 14, fontFamily:'Montserrat-Regular'}}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View>
            <Image
              source={require('../assets/eclipse2.png')}
              style={{height: 60, width: 60}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 31,
    marginTop: 20,
  },
  text1: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 31,
    marginTop: 15,
    fontWeight: '900',
    fontFamily:'Montserrat-Regular'
  },
  greenboxContainer: {
    width: 300,
    height: 140,
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  greenbox: {
    flex: 1,

    borderRadius: 20,
  },
  text2: {
    fontSize: 16,
    color: 'white',
    width: 400,
    marginTop: 20,
    marginLeft: 20,
     fontFamily:'Montserrat-Regular'
  },
  insideBox: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text4: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 20,
    fontFamily:'Montserrat-Regular'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    
  },
  container3: {
    width: 200,

    padding: 10,
  },
  container4: {
    width: 200,

    padding: 10,
    marginLeft: 20,
    fontFamily:'Montserrat-Regular'
  },
  text22: {
    fontWeight: '900',
    marginLeft: 15,
    color: 'black',
    fontSize: 22,
    fontFamily:'Montserrat-Regular'
  },

  textWithIcon: {
    color: '#FE555D',
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily:'Montserrat-Regular'
    // justifyContent:'center'
  },
  icon: {
    marginHorizontal: 10,
  },

  rowContainer33: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    marginLeft: 20,
  },

  imageAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  textgroup: {
    width: 250,
    // borderWidth:2,
    flexDirection: 'column',
    marginRight: 10,
    fontFamily:'Montserrat-Regular'
  },
});
export default HomeMenu;
