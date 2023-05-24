import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../config';
import {AuthContext} from '../../context/AuthContext';

const MyClassmate = () => {
  const {userInfo} = useContext(AuthContext);
  const [classmates, setClassmates] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/list-student-class.php`,
      {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      });
      const data = response.data.data;
      setClassmates(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchClassmates = (text) => {
    setSearchValue(text);
  };

  const filteredClassmates = classmates.filter(
    (classmate) =>
      classmate.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      classmate.last_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const renderClassmate = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToClassmateInfo(item)}>
    <View style={styles.classmateContainer}>
      <View style={styles.leftElementContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/images/user.png')} />
        </View>
      </View>
      <View style={styles.rightSectionContainer}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
  
  const navigateToClassmateInfo = (student) => {
    navigation.navigate('ClassmateInfo', { student });
  };

  return (
    <View style={styles.container}>
    <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchValue}
        onChangeText={searchClassmates}
      />
      {searchValue ? (
        <FlatList
          data={filteredClassmates}
          renderItem={renderClassmate}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={classmates}
          renderItem={renderClassmate}
          keyExtractor={(item) => item.id}
        />
      )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  classmateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  leftElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 13,
  },
  rightSectionContainer: {
    marginLeft: 18,
    flexDirection: 'row',
    flex: 20,
    borderBottomWidth: 0.5,
    borderColor: '#515151',
    height: '100%'
  },
  mainTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
});

export default MyClassmate;