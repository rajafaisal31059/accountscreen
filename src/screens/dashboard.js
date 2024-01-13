import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
} from 'victory-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 1.5, earnings: 6300},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];

const dashboard = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            color={'black'}
            size={30}
            name={'chevron-back'}
            style={{paddingBottom: 20}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
            fontWeight:'900', 
            textAlign:'center'
          }}>
          Dashboard
        </Text>
      </View>
<View style={{flexDirection:'column'}}>
      <VictoryChart width={350}  theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>

      <VictoryPie
       height={300} width={300}
       colorScale={[ "gold", "cyan", "navy" ]}
        data={[
          {x: 'React', y: 60},
          {x: 'Angular', y: 80},
          {x: 'Vue', y: 40},
        ]}
      />
      </View>
    </View>
    </ScrollView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    paddingHorizontal: 10,
  },
  topcontainer: {
    marginTop: 30,
  },
});
