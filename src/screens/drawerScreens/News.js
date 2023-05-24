import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../../config';
import {AuthContext} from '../../context/AuthContext';
import moment from 'moment';

const News = () => {
  const {userInfo} = useContext(AuthContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/news.php`,
      {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      });
      const data = response.data.data;
      setNews(data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNewsItem = ({ item }) => {
    return (
        <View style={styles.newsContainer}>
            <View style={styles.newsDate}>
                <View style={styles.newDateMM}>
                    <Text style={styles.MM}>Tháng {moment(item.created_at).format('MM')}</Text>
                </View>
                <View style={styles.newDateDD}>
                    <Text style={styles.DD}>{moment(item.created_at).format('DD')}</Text>
                </View>
            </View>
            <TouchableOpacity>
              <View style={styles.title}>
                <Text style={styles.titleName}>{item.title}</Text>
                {/* <Text style={styles.details}>More details</Text> */}
              </View>
            </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
         <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  newsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height: 120,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,

  },
  newsDate: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: 80,

  },
  newDateMM: {
    backgroundColor: '#005ab7',
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MM: {
    color: '#fff',
  },
  newDateDD:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  DD: {
    color: '#005ab7',
    fontSize: 26,
  },
  title: {
    marginLeft: 10,
    marginRight: 60,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleName: {
    color: '#005ab7',
    fontWeight: 500
  },
  details:{
    fontSize: 11,
    color: 'red',
    fontWeight: 200,
  },
  name: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 60,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  noResultsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
  },
});

export default News;