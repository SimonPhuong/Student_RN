import * as React from 'react';
import {TextInput, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {AuthContext} from '../../context/AuthContext'
import Button from '../../components/Button';

import axios from 'axios';
import {BASE_URL} from '../../config';

const ChangePassword = ({navigation}) => {

  
  const {userInfo} = React.useContext(AuthContext);

  const [password_current, setPasswordCurrent] = React.useState('');
  const [password_new, setPasswordNew] = React.useState('');
  const [password_confirm, setPasswordConfirm] = React.useState('');

  const handleChangePassword = (password_current, password_new, password_confirm) => {
    axios.post(`${BASE_URL}/change-password.php`,{password_current, password_new, password_confirm},
      {
      headers: {Authorization: `Bearer ${userInfo.access_token}`},
      },
    ).then(res => {

      // Handle success response
      console.log(res.data);
      // Show success message to the user
      alert('Your password has been change!');
      // Clear the input fields
      setPasswordCurrent('');
      setPasswordNew('');
      setPasswordConfirm('');
    })
    .catch(e => {
      console.log(`error ${e}`);
      setIsLoading(false);
    });

  };

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.title}>
            <Text style={styles.textTitle}>
                Change password
            </Text>
      </View>
      <View style={styles.body}>
        <View style={{marginVertical: 10}}>
            <Text style={styles.label}>
                Current password
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPasswordCurrent(text)}
                value={password_current}
                secureTextEntry={true}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={styles.label}>
                New password
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPasswordNew(text)}
                value={password_new}
            />
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={styles.label}>
                New password
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setPasswordConfirm(text)}
                value={password_confirm}
            />  
        </View>
        <View>
        <Button 
              title = "Submit"
              style = {styles.button}
              onPress={() => {
                handleChangePassword(password_current, password_new, password_confirm);
              }}>
        </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'rgb(249,250,255)', 
    padding: 10,
  },
  textTitle: {
    fontSize: 16, 
    marginBottom: 10,
  },
  body: {
    backgroundColor: '#FFF',
  },
  label: {
    paddingLeft: 10,
    fontSize: 14
  },
  input: {
    backgroundColor: 'rgb(249,250,255)',
    height: 50,
    margin: 12,
    fontSize: 14,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    padding: 15,
  }
});



export default ChangePassword;