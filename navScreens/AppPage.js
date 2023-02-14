import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Context} from '../globals/context.js';

//Screens
import HomeScreen from './screens/HomeScreen.js';
import SearchScreen from './screens/SearchScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import AddItemScreen from './modals/AddItemScreen.js';
import ProposeTradeScreen from './modals/ProposeTradeScreen.js';
import ItemDetailsScreen from './screens/ItemDetailsScreen.js';
import AuthPage from './AuthPage.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppPage() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='HomeTabs'
      screenOptions={{
        headerStyle: {
          // backgroundColor: 'grey'
        }
      }}
      >
        <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
        />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="ProposeTradeScreen" component={ProposeTradeScreen} />
        <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} options={{title: 'Item Details'}} />
        <Stack.Screen name="LoginScreen" component={AuthPage} options={{title: 'Login'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//TABS PAGE

function HomeTabs() {

  return (
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({route}) => {
        return ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === 'Search') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (rn === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },//tabBarIcon
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'white',
        tabBarStyle: {
          height: 90,
        }
      })
      }}
      >
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Search'} component={SearchScreen} />
        <Tab.Screen name={'Settings'} component={SettingsScreen} />

        {/* <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      /> */}

      </Tab.Navigator>
  );

}



//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});