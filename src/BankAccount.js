import React from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



export const BankAccount = () => {
    const navigation = useNavigation();
  return (
   <View style={styles.container}> 
      <View style={styles.firstcontainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon name="chevron-back-sharp" size={25} color="black" style={{paddingTop:30}} />
    </TouchableOpacity>
<Text style={{color:'black',fontWeight:'900',fontSize:17,marginTop:25,marginLeft:65}}>Bank Account Info</Text>
    </View>
   </View>
  )
}


const styles = StyleSheet.create({
  
    container: {
      backgroundColor:'#F6F6F9', flex:1,
      paddingLeft:20,
      // width: '100%',
      
      // height: '10%',
  
      // borderWidth:1
    },
    firstcontainer:{
      flexDirection:'row',
    alignItems:'center',
  },
  });
  