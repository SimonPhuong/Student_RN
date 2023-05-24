import {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import {AuthContext} from '../../context/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import moment from 'moment';
import axios from 'axios';
import {BASE_URL} from '../../config';


const Profile = ({navigation}) => {

  const {userInfo, handleLogout} = useContext(AuthContext);
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    getStudentInfo();
  }, []);
  const getStudentInfo = async () => {
    axios
    .get(`${BASE_URL}/profile.php`, {
      headers: { Authorization: `Bearer ${userInfo.access_token}` },
    })
    .then((res) => {
      const studentInfo = res.data.data;
      console.log(res.data.data);
      setStudentInfo(studentInfo);
    })
    .catch((error) => {
      console.error(error);
    });    
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <View style={{flexDirection: 'row'}}>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require('../../assets/images/backArrow/backArrow.png')}
              style={styles.icon} />
            </TouchableOpacity> */}     
          <Text style={[styles.headerText]}></Text>
        </View>
      </View>
     
    <View style={styles.content}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/user.jpg')}
          style={styles.profileImage}
        />
        <TouchableOpacity>
          <View style={styles.smallIconContainer}>
            <Image
              source={require('../../assets/images/edit_small/edit_small.png')}
              style={styles.smallIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 65}}>
        <Text style={styles.name}>{studentInfo.first_name} {studentInfo.last_name}</Text>
        <Text style={styles.description}>Your profile</Text>
      </View>
      <ScrollView> 
      <View>
          <View style={styles.list}>
            <Text style={styles.listItem}>ID: </Text>
            <Text style={styles.itemDetail}>{userInfo.id_user}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Class: </Text>
            <Text style={styles.itemDetail}>{studentInfo.classroom_name}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>First name: </Text>
            <Text style={styles.itemDetail}>{studentInfo.first_name}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Last name: </Text>
            <Text style={styles.itemDetail}>{studentInfo.last_name}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Gender: </Text>
            <Text style={styles.itemDetail}>{studentInfo.gender}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Date of Birth: </Text>
            <Text style={styles.itemDetail}>{moment(studentInfo.date_of_birth).format('DD-MM-YYYY')}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Address: </Text>
            <Text style={styles.itemDetail}>{studentInfo.address}, {studentInfo.state}, {studentInfo.city}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listItem}>Phone: </Text>
            <Text style={styles.itemDetail}>0{studentInfo.phone}</Text>
          </View>
          <Button
            style={styles.logout}
            onPress={handleLogout}
            title="Logout"
          />
        </View>
      </ScrollView> 
    </View>
  </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(16, 103, 214, 0.8)',
  },
  headerTitle: {
    marginTop: 30,
    padding: 20,
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 0,
    justifyContent: 'flex-start',
  },
  content: {
    backgroundColor: '#fff',
    flex: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  titleContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  
  icon: {
    width: 21,
    height: 18,
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  backButton: {
    alignSelf: 'center', 
    padding: 5, 
    paddingLeft: 0
  },

  profileImageContainer: {
    position: 'absolute',
    top: -65,
    alignSelf: 'center',
    
  },
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
    borderColor: '#fff',
    borderWidth: 6,
  },
  smallIconContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#8CC33F',
    width: 24,
    height: 24,
    borderRadius: 12,
    right: 5,
    bottom: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    letterSpacing: 0,
    color: '#262626',
    alignSelf: 'center',
  },
  description: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#808080',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  menuContainer: {
    marginTop: 25,
  },

  list: {
    borderBottomWidth: 1,
    borderColor: '#CBCBCB',
    padding: 20,
    flexDirection: 'row',
  },
  listItem: {
    color: '#262626',
    letterSpacing: 0,
    alignSelf: 'flex-start',
    flex: 1,    
    fontWeight: '700'
  },
  itemDetail: {
    color: '#262626',
    alignItems: 'baseline',
    flex: 2,
  },
  logout: {
    padding: 10,
  },

  
});

export default Profile;