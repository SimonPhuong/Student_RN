import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import {BASE_URL} from '../../config';
import {AuthContext} from '../../context/AuthContext';

const ListTeacher = () => {
  const {userInfo} = React.useContext(AuthContext);
  const [teachers, setTeachers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/list-teacher.php`,
      {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      });
      const data = response.data.data;
      setTeachers(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const searchTeachers = (text) => {
    setSearchValue(text);
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      teacher.last_name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const renderTeacher = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToTeacherInfo(item)}>
    <View style={styles.teacherContainer}>
      <View style={styles.leftElementContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/images/user.png')} />
        </View>
      </View>
      <View style={styles.rightSectionContainer}>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
          <Text style={styles.subject}>{item.subject_name}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  const navigateToTeacherInfo = (teacher) => {
    navigation.navigate('TeacherInfo', { teacher });
  };


  return (
    
    <View style={styles.container}>
    <View style={{marginBottom: 10,}}>
    <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchValue}
        onChangeText={searchTeachers}
    />
    </View>
      {searchValue ? (
        <FlatList
          data={filteredTeachers}
          renderItem={renderTeacher}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={teachers}
          renderItem={renderTeacher}
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
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    // borderBottomWidth: 0.2,
    // borderColor: '#515151',
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
    paddingBottom: 10,
  },
  subject: {
    fontSize: 12
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

export default ListTeacher;