import React from 'react'
import {View,Text,StyleSheet,FlatList,Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
export const Account = ({navigation}) => {
  const tab = [
    {
      lefticon: 'contacts',
      text: 'Contact Info',
      righticon: 'chevron-thin-right',
    },
    {
      lefticon: 'cash',
      text: 'Source of Funding info',
      righticon: 'chevron-thin-right',
    },
    {
      lefticon: 'bank',
      text: 'Bank Account info',
      righticon: 'chevron-thin-right',
    },
    {
      lefticon: 'file-document',
      text: 'Document info',
      righticon: 'chevron-thin-right',
    },
    {
      lefticon: 'cog',
      text: 'Settings',
      righticon: 'chevron-thin-right',
    },
  ];
  const handleNav=(index)=>{
    if(index===0)
    {
       navigation.navigate('contact') }
       else if(index==2){
         navigation.navigate('bank')
       }
    
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection:'row',elevation:3,backgroundColor:'white',height:60,width:320, marginTop:20, alignItems:'center',justifyContent:'space-evenly',borderRadius:10}}>
        <Icon2 size={24} color='black' name={item.lefticon}></Icon2>
        <TouchableOpacity onPress={()=>handleNav(index)}>
        <Text style={{width: 200, color: 'black',fontSize:18}}>{item.text}</Text>
        </TouchableOpacity>
        <Icon1 size={20} color='black' name={item.righticon} onPress={()=>{}}></Icon1>
     
      </View>
    );
  };


  return (
<View style={styles.container}>
  <View style={styles.firstcontainer}>
<Icon name="chevron-back-sharp" size={30} color="black" style={{paddingTop:30}} />
<Text style={{color:'black',fontWeight:'900',fontSize:34,marginTop:25}}>Profile</Text>
</View>

<View style={styles.secondcontainer}>
<Image
          source={require('../assets/avatar.png')}
          style={{height: 140, width: 140, borderRadius: 25,}}

        />
        <Text style={{color:'black',fontWeight:'900',fontSize:22,marginTop:15}}>James Macroni</Text>
        <Text style={{color:'black',fontSize:17,marginTop:10,width:60}}>Expert</Text>
</View>


<FlatList
        data={tab}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{paddingBottom: 10}}
      />

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
    flexDirection:'column'
  },
  secondcontainer:{
    marginTop:30,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  
  }
 
});
