import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Register from './src/Register';
import HomeMenu from './src/HomeMenu';
import BottomTabNavigator from './src/BottomNavigator';
import {Contactinfo} from './src/Contactinfo';
import {Notification} from './src/Notification';
import {BankAccount} from './src/BankAccount';
import LoginAccount from './src/LoginAccount';
import DrawerContent from './src/DrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

const StackNav=()=>{
  const Stack = createNativeStackNavigator();
  return(
  <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="contact"
            component={Contactinfo}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="bank"
            component={BankAccount}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="notification"
            component={Notification}
            options={{title: 'Welcome', headerShown: false}}
          />
          <Stack.Screen
            name="Reg"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={LoginAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Menu"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Product"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Transaction"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="BottomTabs"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
  )
}


const DrawerNav=()=>{
  const Drawer= createDrawerNavigator();
  return (
        <Drawer.Navigator screenOptions={{headerShown:false} } drawerContent={props=><DrawerContent {...props}/>}>
          <Drawer.Screen name='Menu' component={StackNav}></Drawer.Screen>
        </Drawer.Navigator>
  );
}

const App = () => {
 
  return (
    
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
    
  );
};

export default App;
