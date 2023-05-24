import React, { useContext } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigatorRoutes from '../screens/DrawerNavigatorRoutes';
import {AuthContext} from '../context/AuthContext';
import { Ionicons } from 'react-native-vector-icons';

import Profile from '../screens/drawerScreens/ProfileScreen';
import Contact from '../screens/drawerScreens/Contact';
import HomeScreen from '../screens/drawerScreens/HomeScreen';
import Announcement from '../screens/drawerScreens/Announcement';
import ChangePassword from '../screens/drawerScreens/ChangePassword';
import MyClassmate from '../screens/drawerScreens/MyClassmate';
import ListTeacher from '../screens/drawerScreens/ListTeacher';
import News from '../screens/drawerScreens/News';
import TeacherInfo from '../screens/drawerScreens/TeacherInfo';
import ClassmateInfo from '../screens/drawerScreens/ClassmateInfo';
import Scores from '../screens/drawerScreens/Scores'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'Announcement') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          else if (route.name === 'Contact') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } 
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarLabel: ''
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Announcement" component={Announcement} />
        
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

const StackNavigator = () => {
    const {userInfo, splashLoading} = useContext(AuthContext);
    return(
        <NavigationContainer>
            <Stack.Navigator>
                    {splashLoading 
                ? ( <Stack.Screen name="Splash Screen" component={SplashScreen} options={{headerShown: false}}/> ) 
                : userInfo.access_token ? (
                    <>
                        <Stack.Screen name="DrawerNavigatorRoutes" component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
                        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: true }}/>
                        <Stack.Screen name="MyClassmate" component={MyClassmate} options={{ headerShown: true }}/>
                        <Stack.Screen name="ListTeacher" component={ListTeacher} options={{ headerShown: true }}/>
                        <Stack.Screen name="News" component={News} options={{ headerShown: true }}/>
                        <Stack.Screen name="TeacherInfo" component={TeacherInfo} options={{ headerShown: true}}/>
                        <Stack.Screen name="ClassmateInfo" component={ClassmateInfo} options={{ headerShown: true}}/>
                        <Stack.Screen name="Scores" component={Scores} options={{ headerShown: true}}/>
                    </>
                ) : (
                    <>
                    <Stack.Screen name = "LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    </>
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;