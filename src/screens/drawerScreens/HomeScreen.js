import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import MenuContainer from '../../components/MenuContainer'
import Carousel from '../../components/Carousel'

import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

const Icon = ({ icon, item, background }) => (
  <FontAwesome
      name={icon}
      size={30}
      color={
          item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
      }
      style={item.styleIcon}
  />
);

const data = [
  {
      name: 'Profile',
      icon: (item, background) => Icon({ icon: 'user', item }),
      iconColor: '#0d47a1',
      rippleColor: '#000',
  },
  {
      name: 'My class',
      icon: (item) => Icon({ icon: 'cube', item }),
      styleIcon: { color: '#0d47a1' },
  },

  {
      name: 'Teachers',
      icon: (item) => Icon({ icon: 'users', item }),
      styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
      name: 'Students',
      nameColor: '#3498db',
      icon: (item, background) => Icon({ icon: 'group', item }),
  },
  {
      name: 'Calendars',
      background: '#ff5722',
      icon: (item, background) => Icon({ icon: 'calendar', item, background }),
  },
  {
    name: 'Change password',
    icon: (item, background) => Icon({ icon: 'lock', item }),
},
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const {userInfo} = useContext(AuthContext);

  const handleCardPress = (name) => {
    
    if (name === 'Profile') {
      navigation.navigate('Profile');
    } else if (name === 'My class') {
      navigation.navigate('Class');
    } else if (name === 'Change password') {
      navigation.navigate('ChangePassword');
    }
  };


  const card = ({ name }) => handleCardPress(name);
  
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard {userInfo.groups}</Text>
      <Dashboard
          data={data}
          background={true}
          card={card}
          column={4}
          rippleColor={'#3498db'}
      /> 
    </View>
    <View style={{ flex: 1}} >
    <Carousel/>
    </View>

    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    paddingTop: 15,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
