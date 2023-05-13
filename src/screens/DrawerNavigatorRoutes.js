import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './drawerScreens/HomeScreen';
import SecondPage from './drawerScreens/ProfileScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator 
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', 
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SecondScreenStack = () => {
  return(
    <Stack.Navigator
      initialRouteName="Profile">
        <Stack.Screen 
          name="Profile" 
          component={SecondPage} 
          options={{
            title: 'Profile', 
            headerShown: false,
            }} />
    </Stack.Navigator>
  );
};
  

const DrawerNavigatorRoutes = (props) => {
  // return (
  //   <Drawer.Navigator>
  //     <Drawer.Screen
  //       name="HomeScreenStack"
  //       options={{drawerLabel: 'Home Screen'}}
  //       component={HomeScreenStack}
  //     />
  //     <Drawer.Screen 
  //       name="SecondScreenStack"
  //       options={{headerShown: false}}
  //       component={SecondScreenStack}
  //     />

  //   </Drawer.Navigator>
  // );
};
  
export default DrawerNavigatorRoutes;