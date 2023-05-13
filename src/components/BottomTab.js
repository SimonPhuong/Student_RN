import React from 'react'
import { StyleSheet } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/drawerScreens/HomeScreen'
import SecondPage from '../pages/SecondPage'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SecondPage" component={SecondPage} />
    </Tab.Navigator>
  );
}

export default BottomTab;

const styles = StyleSheet.create();

