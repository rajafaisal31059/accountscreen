import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Notification = () => {
    const notifications=[
        {
        image: require('../assets/pic1.png'),
        text: 'Apple stocks just increased. Check it out now' ,
        righttext: '15min ago'

        },
        {
            image: require('../assets/pic2.png'),
            text: 'Check out today’s best investor. You’ll learn from him' ,
            righttext: '3min ago'
    
            },
            {
                image: require('../assets/pic3.png'),
                text: 'Where do you see yourself in the next ages.' ,
                righttext: '30sec ago'
        
                },
    ]

    const renderItem = ({item, index}) => {
        return (
          <View style={{flexDirection:'row',backgroundColor:'white',height:100,width:330, marginTop:20, alignItems:'center',justifyContent:'center', borderBottomWidth:2,borderBottomColor:'rgba(0, 0, 0, 0.1)',Horitonztal:20}}>

            <Image source={item.image} style={{height:70,width:70,borderRadius:20,paddingLeft:5}}/>
            <Text style={{color:'black',fontSize:14,height:100,width:180,paddingTop:25,paddingLeft:5}}>{item.text}</Text>
            <Text style={{color:'rgba(0, 0, 0, 0.4)',fontSize:12,width:70,height:100,paddingTop: 20}}>{item.righttext}</Text>

              
           
         
          </View>
        );
      };

  return (
    <View style={styles.container}>
      <View style={styles.firstcontainer}>
        <Icon name="chevron-back-sharp" size={30} color="black" style={{ paddingTop: 30 }} />
        <Text style={{ color: 'black', fontWeight: '900', fontSize: 34, marginTop: 25 }}>Notification</Text>
      </View>



      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       
      />
      <View style={{height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,}}></View>
  
    </View>
  );
};

const styles = StyleSheet.create({
 
    container: {
        backgroundColor:'white', flex:1,
        paddingLeft:20,
        // width: '100%',
        
        // height: '10%',
    
        // borderWidth:1
      },
      firstcontainer:{
        flexDirection:'column'
      },
  
  
});
