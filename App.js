import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Register from './src/Register';
import HomeMenu from './src/HomeMenu';
import BottomTabNavigator from './src/BottomNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          name="Reg"
          component={Register}
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
    </NavigationContainer>
  );
};

export default App;
