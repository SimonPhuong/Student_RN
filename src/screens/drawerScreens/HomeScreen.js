import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import axios from 'axios';
import {BASE_URL} from '../../config';

import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

const Icon = ({ icon, item, background }) => (
  <FontAwesome
      name={icon}
      size={32}
      color={
          item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
      }
      style={item.styleIcon}
  />
);

const data = [
  {
      name: 'News',
      icon: (item) => Icon({ icon: 'newspaper-o', item }),
      iconColor: '#0d47a1',
  },
  {
      name: 'Classmate',
      icon: (item) => Icon({ icon: 'cube', item }),
      styleIcon: { color: '#0d47a1' },
  },

  {
      name: 'Teacher',
      icon: (item) => Icon({ icon: 'users', item }),
      styleIcon: { color: '#0d47a1' },
  },
  {
      name: 'Score',
      icon: (item, background) => Icon({ icon: 'bar-chart', item }),
      // nameColor: '#3498db',
      styleIcon: {color: '#0d47a1'}
  },
  {
      name: 'Calendar',
      background: '#ff5722',
      icon: (item, background) => Icon({ icon: 'calendar', item, background }),
  },
  {
    name: 'Password',
    icon: (item, background) => Icon({ icon: 'lock', item }),
    styleIcon: {color: '#0d47a1'}
},
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const {userInfo, handleLogout} = useContext(AuthContext);
  

  const handleCardPress = (name) => {
    
    if (name === 'News') {
      navigation.navigate('News');
    } else if (name === 'Classmate') {
      navigation.navigate('MyClassmate');
    } else if (name === 'Password') {
      navigation.navigate('ChangePassword');
    } else if (name === 'Teacher') {
      navigation.navigate('ListTeacher');
    } else if (name === 'Score') {
      navigation.navigate('Scores');
    }
  };


  const card = ({ name }) => handleCardPress(name);
  
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/user.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.info}>{userInfo.first_name} {userInfo.last_name}</Text>
          <Text style={styles.info}>{userInfo.id_user}</Text>
        </View>
        <View style={styles.dashboard}>
        <Dashboard
            data={data}
            background={true}
            card={card}
            column={3}
            scrollEnabled={false}
        /> 
        </View>
      </View>
    </View>
   

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {  
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(16, 103, 214, 0.8)',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
  },
  content: {
    flex: 3,
  },
  profileContainer: {
    flex: 1,
    position:'absolute',
    top: -60,
    alignSelf: 'center',
    height: 150,
    width: '70%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 65,
    borderColor: '#fff',
    borderWidth: 2,
  },
  info: {
    paddingVertical: 5,
    fontSize: 13,
    letterSpacing: 0,
    color: '#262626',
    alignSelf: 'center',
  },
  dashboard: {
    flex: 1,
    top: 120,
  },
  title: {
    marginTop: 50,
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 32,
    paddingTop: 15,
    letterSpacing: 1, 
  },
});

export default HomeScreen;
