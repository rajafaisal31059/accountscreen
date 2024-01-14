import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryLine,
  VictoryLabel,
} from 'victory-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {quarter: 1, earnings: 10},
  {quarter: 1.5, earnings: 20},
  {quarter: 2, earnings: 30},
  {quarter: 2.5, earnings: 40},
  {quarter: 3, earnings: 30},
  {quarter: 3.5, earnings: 20},
  {quarter: 4, earnings: 20},
];

const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        fontSize: 18,
        fontFamily:'Montserrat-Regular',
        fill: 'white',
        padding: 10,
      },
      grid: {stroke: '#F4F5F7', strokeWidth: 0.0},
    },
  },
};

const dashboard = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  console.log(width, height);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon color={'black'} size={30} name={'chevron-back'} />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Montserrat-Bold',
              fontWeight: '900',
              paddingLeft: width / 4,
            }}>
            Dashboard
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
          }}>
          <Text style={styles.datetext}>Mon: September</Text>

          <Text style={styles.datetext}>2023</Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={styles.victorychart}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Your Orders</Text>
            </View>
            <VictoryChart
              width={350}
              height={height / 4.1}
              style={styles.chart}
              theme={chartTheme}
              domainPadding={{x: 20}}>
              <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
                style={styles.bar}
              />
            </VictoryChart>
          </View>

          <View style={styles.victoryLine}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Your History</Text>
            </View>
            <VictoryLine
              style={{
                data: {stroke: 'white', strokeWidth: 6},
              }}
              data={[
                {x: 1, y: 2, label: '1'},
                {x: 2, y: 3, label: '2'},
                {x: 3, y: 5, label: '3'},
                {x: 4, y: 4, label: '4'},
                {x: 5, y: 7, label: '4'},
              ]}
              interpolation="natural"
              labelComponent={
                <VictoryLabel
                  dy={-20}
                  dx={5}
                  style={{fontSize: 18, fill: 'white', fontFamily:'Montserrat-Regular'}}
                />
              } // Adjust dy value for label position
              labels={({datum}) => datum.label}
            />
          </View>
          <View style={styles.rowbuttons}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#663399'}]}>
              <Text style={styles.buttonText}>10</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#2280FF'}]}>
              <Text style={styles.buttonText}>74</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#F23B27'}]}>
              <Text style={styles.buttonText}>148</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {}]}>
              <Text style={styles.buttonText}>33</Text>
            </TouchableOpacity>
          </View>

          <VictoryPie
            height={height / 2.5}
            width={width / 1.15}
            colorScale={['#F23B27', '#663399', '#2280FF']}
            data={[
              {x: 'React', y: 60},
              {x: 'Angular', y: 80},
              {x: 'Vue', y: 40},
            ]}
            style={{
              labels: {
                fontSize: 20,
                fill: 'black',
                fontFamily: 'Montserrat-Bold',
              },
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#white',
    paddingHorizontal: 20,
  },
  topcontainer: {
    flexDirection: 'row',
    marginTop: 30,

    alignItems: 'center',
  },
  datetext: {
    fontSize: 18,
    fontFamily:'Montserrat-ExtraBold'
  },
  victorychart: {
    marginTop: 10,
    backgroundColor: '#F23B27',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  victoryLine: {
    backgroundColor: '#F23B27',
    height: Dimensions.get('window').height / 3.6,
    marginTop: 20,
    backgroundColor: '#9851F9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    labels: {fontSize: 22},
  },
  bar: {
    data: {fill: 'white', width: 18},
    tickLabels: {fontSize: 20},
  },
  rowbuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    height: Dimensions.get('window').height / 22,
    width: Dimensions.get('window').width / 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    // fontWeight: '900',
    fontFamily:'Montserrat-Regular'
  },

  labelContainer: {
    position: 'absolute',
    top: 10,
  },
  labelText: {
    fontSize: 22,
    color: 'white',

    fontFamily: 'Montserrat-Regular',
  },
});
