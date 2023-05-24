import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ClassmateInfo = ({ route }) => {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile student</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/user.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{student.first_name} {student.last_name}</Text>
          <Text style={styles.info}>{student.id_user}</Text>
        </View>
        <View style={styles.contact}>
            <View style={{top: -22, left: 5, position: ''}}>
                <Text style={{fontSize: 18, fontWeight: 700, color: '#FBD620'}}>Contact</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Phone: </Text>
                <Text style={styles.itemDetail}>0{student.phone}</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Email: </Text>
                <Text style={styles.itemDetail}>{student.email}</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Location: </Text>
                <Text style={styles.itemDetail}>{student.address}, {student.state}, {student.city}</Text>
            </View>
        </View>
        <View style={styles.profileDetails}>
            <View style={{top: -22, left: 5, position: ''}}>
                <Text style={{fontSize: 18, fontWeight: 700, color: '#FBD620'}}>More Info</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Gender: </Text>
                <Text style={styles.itemDetail}>{student.gender}</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Nation: </Text>
                <Text style={styles.itemDetail}>{student.nation}</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Religion: </Text>
                <Text style={styles.itemDetail}>{student.religion}</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.listItem}>Date of Birth: </Text>
                <Text style={styles.itemDetail}>{student.date_of_birth}</Text>
            </View>
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
      backgroundColor: '#FBD620',
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
      alignItems: 'center',
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
    name: {
      textTransform: 'capitalize',
      marginVertical: 5,
      fontSize: 16,
      fontWeight: 500,
    },
    info: {
      paddingVertical: 5,
      fontSize: 13,
      letterSpacing: 0,
      color: '#262626',
      alignSelf: 'center',
    },
    contact: {
        flex: 1,
        position:'absolute',
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10,
        top: 120,
        width: '90%',
        height: 150,
        borderColor: '#FBD620',
        borderWidth: 0.5,    
    },
    list: {
      borderColor: '#CBCBCB',
      paddingBottom: 20,
      flexDirection: 'row',
    },
    listItem: {
      color: '#262626',
      letterSpacing: 0,
      textAlign: 'right',
      marginRight: 20,
      flex: 1,
      fontWeight: '700',
      
    },
    itemDetail: {
      color: '#262626',
      alignItems: 'baseline',
      flex: 2,
    },
    profileDetails:{
        flex: 1,
        position:'absolute',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        top: 300,
        width: '90%',
        height: 180,
        borderColor: '#FBD620',
        borderWidth: 0.5,        
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
  
export default ClassmateInfo;