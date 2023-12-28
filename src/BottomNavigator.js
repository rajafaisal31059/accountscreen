import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import HomeMenu from './HomeMenu';
import Icon from 'react-native-vector-icons/Ionicons'; // Import your icon library
import { Account } from './Account';
import { Product } from './Product';
import { Transaction } from './Transaction';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
   
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Product') {
            iconName = focused ? 'search' : 'search-outline';
          }
          else if (route.name === 'Transaction') {
            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
          }
           else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          

          return <Icon name={iconName} size={25} color={color}  />;
        },
        tabBarStyle:{
          
            height:65,
        }
      })}


      tabBarOptions={{
        activeTintColor: 'green', 
        inactiveTintColor: 'gray',
        topBarLabelStyle:{
            fontSize:12
        },
        style: {

          backgroundColor: 'white', 
          borderTopWidth: 1, 
          borderTopColor: 'gray',
        
        
        },
        
      }}
    >
      
      <Tab.Screen name="Menu" component={HomeMenu} options={{ headerShown: false,tabBarLabel:'Home',tabBarLabelStyle:{fontSize:12, marginBottom:10} }} 
      />
       <Tab.Screen name="Product" component={Product} options={{ headerShown: false, tabBarLabelStyle:{fontSize:12, marginBottom:10, width:50} ,tabBarLabel:'Product' }} 
      />
      <Tab.Screen name="Transaction" component={Transaction}  options={{ headerShown: false, tabBarLabelStyle:{fontSize:12, marginBottom:10, width:70} ,tabBarLabel:'Transaction' }} 
      />
       <Tab.Screen name="Profile" component={Account} options={{ headerShown: false, tabBarLabelStyle:{fontSize:12, marginBottom:10, width:60} ,tabBarLabel:'Profile' }} 
      />
     
      
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigator;
