import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';

export const Product = () => {
  const product = [
    {
      price: 'Rp 200.000',
      stock: 'Buy APPL Stock',
      date: 'TUE 22 Jun 2020',
    },
    {
      price: 'Rp 150,000',
      stock: 'Sell TKLM Stock',
      date: 'TUE 22 Jun 2020',
    },
    {
      price: 'Rp 1.000.240',
      stock: 'Buy FB Stock',
      date: 'TUE 22 Jun 2020',
    },
    {
      price: 'Rp 1.000.240',
      stock: 'Sell APPL Stock',
      date: 'TUE 20 june 2020',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
          paddingLeft: 20,
        }}>
        <Text
          style={{
            color: index % 2 == 0 ? 'black' : 'green',
            fontSize: 22,
            fontWeight: '900',
            fontFamily:'Montserrat-Bold'
          }}>
          {item.price}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 10,
          
          }}>
          <Text style={{width: 200, color: '#B3B3B3', fontSize: 14, fontFamily:'Montserrat-Regular'}}>
            {item.stock}
          </Text>
          <Text style={{width: 200, color: '#B3B3B3', fontSize: 14, fontFamily:'Montserrat-Regular'}}>
            {item.date}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(74, 74, 74, 0.2)',
          }}></View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.center1}>
          <Text style={{color: 'black', fontSize: 22, fontWeight: '900',fontFamily:'Montserrat-Bold'}}>
            My Asset
          </Text>
        </View>
        <View style={styles.center2}>
          <Icon name="circle-with-cross" size={30} color="#B3B3B3" />
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={{color: '#B3B3B3', fontSize: 16, fontFamily:'Montserrat-Regular'}}>
          Your total asset portfolio
        </Text>
        <View style={styles.container2_1}>
          <Text style={{color: 'black', fontSize: 30, fontWeight: '900', fontFamily:'Montserrat-Bold'}}>
            N203,935
          </Text>
          <View style={styles.container2_2}>
            <Icon name="arrow-bold-up" size={18} color="green" />
            <Text style={{fontSize: 10, color: '#00B907', width: 30}}>+2%</Text>
          </View>
        </View>
      </View>

      <View style={styles.container3}>
        <Text style={{color: 'black', fontSize: 22, fontWeight: '900,',fontFamily:'Montserrat-Regular'}}>
          Current Plans
        </Text>
        <Image
          source={require('../assets/Portfolio1.png')}
          style={{height: 190, width: 320, borderRadius: 25, marginTop: 10}}
        />
        <View style={styles.container3_1}>
          <Text
            style={{
              fontSize: 20,
              color: '#FE555D',
              borderWidth: 1,
              borderColor: 'white',
              fontFamily:'Montserrat-Regular'
            }}>
            See All Plans
            <Icon3 name="arrowright" size={20} color="#FE555D" />
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          paddingBottom: 10,
          paddingLeft: 20,
          fontWeight: '900',
          marginTop: 15,
          fontFamily:'Montserrat-Regular'
        }}>
        History
      </Text>

      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{paddingBottom: 10}}
      />

      {/* <View style={styles.container4}>
      <Text style={{color: 'black', fontSize: 22, fontWeight: '900'}}>
        History
        </Text>


        <View style={styles.container4_1}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>Rp 200.000</Text>
        <View style={styles.container4_2}>
        <Text style={{color: '#B3B3B3', fontSize: 16}}>BUY 'APPL' STOCK</Text>
        <Text style={{color: '#B3B3B3', fontSize: 16}}> TUE 22 JUNE 2020</Text>
        </View>

        </View>
        
        <View style={{
           height: 1,  
           width:'95%',
           backgroundColor: 'rgba(74, 74, 74, 0.2)',   
           marginVertical: 15,
           
        }}>
            

        </View>

        <View style={styles.container4_1}>
        <Text style={{color: '#00B907', fontSize: 20, fontWeight: '900'}}>Rp 150.000</Text>
        <View style={styles.container4_2}>
        <Text style={{color: '#B3B3B3', fontSize: 16,borderWidth:1,borderColor:'white'}}>BUY 'TKLM' STOCK</Text>
        <Text style={{color: '#B3B3B3', fontSize: 16}}> TUE 22 JUNE 2020</Text>
        </View>

        </View>
        
        <View style={{
           height: 1,  
           width:'95%',
           backgroundColor: 'rgba(74, 74, 74, 0.2)',   
           marginVertical: 15,
           
        }}>
            

        </View>

        <View style={styles.container4_1}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '900'}}>Rp 200.000</Text>
        <View style={styles.container4_2}>
        <Text style={{color: '#B3B3B3', fontSize: 16}}>BUY 'APPL' STOCK</Text>
        <Text style={{color: '#B3B3B3', fontSize: 16}}> TUE 22 JUNE 2020</Text>
        </View>

        </View>
        
        <View style={{
           height: 1,  
           width:'95%',
           backgroundColor: 'rgba(74, 74, 74, 0.2)',   
           marginVertical: 15,
           
        }}>
            

        </View>



      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // width: '100%',
    backgroundColor: '#ffffff',
    // height: '10%',
    flexDirection: 'row',
    // borderWidth:1
  },
  center1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  center2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  container2: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    // width: '100%',
    // height: '10%',
    flexDirection: 'column',
    paddingLeft: 20,
    // borderWidth: 1,
  },
  container2_1: {
    flexDirection: 'row',
    marginTop: 10,
    // width: '50%',
    // borderWidth: 1,
  },

  container2_2: {
    marginLeft: 0,
    paddingTop: 10,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    // borderWidth:1
  },
  container3: {
    marginTop: 15,
    backgroundColor: '#ffffff',
    // width: '100%',
    // height: '42%',
    paddingLeft: 20,

    flexDirection: 'column',
  },
  container3_1: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   container4:{
  //     backgroundColor: '#ffffff',
  //     width: '100%',
  //     height: '60%',
  //     paddingLeft: 20,

  //     flexDirection: 'column',
  //     // borderWidth:1
  //   },
  //   container4_1:{
  //     marginTop:20,
  //     flexDirection:'column'
  //   },
  //   container4_2:{
  //     flexDirection:'row',
  //     justifyContent:"space-between",
  //     paddingRight:25
  //   }
});
