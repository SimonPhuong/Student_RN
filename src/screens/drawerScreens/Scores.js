import { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

const Scores = () => {
  const { userInfo } = useContext(AuthContext);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    axios
      .get(`${BASE_URL}/get-scores.php`, {
        headers: { Authorization: `Bearer ${userInfo.access_token}` },
      })
      .then((res) => {
        const scores = res.data.data;
        console.log(res.data.data);
        setScores(scores);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.colHeaderSubject}>
            <Text style={styles.headerText}>Subject</Text>
        </View>
        <View style={styles.colHeaderScore}>
            <Text style={styles.headerText}>Oral</Text>
        </View>
        <View style={styles.colHeaderScore}>
            <Text style={styles.headerText}>15m</Text>
        </View>
        <View style={styles.colHeaderScore}>
            <Text style={styles.headerText}>45m</Text>
        </View>
        <View style={styles.colHeaderScore}>
            <Text style={styles.headerText}>Final</Text>
        </View>
        <Text style={styles.headerText}>SPA</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.colSubject}>
            <Text style={styles.subjectName}>{item.subject_name}</Text>
        </View>
        <View style={styles.colScore}>
            <Text style={styles.scoreText}>{item.oral_exam_1}</Text>
            <Text style={styles.scoreText}>{item.oral_exam_2}</Text>
            <Text style={styles.scoreText}>{item.oral_exam_3}</Text>
        </View>
        <View style={styles.colScore}>
            <Text style={styles.scoreText}>{item.exam_15m_1}</Text>
            <Text style={styles.scoreText}>{item.exam_15m_2}</Text>
            <Text style={styles.scoreText}>{item.exam_15m_3}</Text>
        </View>
        <View style={styles.colScore}>
            <Text style={styles.scoreText}>{item.exam_45m_1}</Text>
            <Text style={styles.scoreText}>{item.exam_45m_2}</Text>
            <Text style={styles.scoreText}>{item.exam_45m_3}</Text>
        </View>
        <View style={styles.colScore}>
            <Text style={styles.scoreText}>{'\n'} {item.final_exam} {'\n'} </Text>
        </View>
        <View style={styles.colScore}>
            <Text style={styles.scoreText}>{'\n'} {item.spa} {'\n'}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={scores}
        renderItem={renderItem}
        keyExtractor={(item) => item.subject_name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#007BBF'
  },
  colHeaderSubject: {
    paddingRight: 5,
    width: 90,
  },
  colHeaderScore: {
    paddingRight: 5,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colSubject: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: 5,
    width: 90,
  },
  colScore: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: 5,
    width: 60,
    flexDirection: 'column',
    alignItems: 'center',

  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subjectName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
  },
  scoreText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 3,
  },
});

export default Scores;
