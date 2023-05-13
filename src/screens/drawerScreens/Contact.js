import * as React from 'react';
import {TextInput, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Textarea from 'react-native-textarea';
import {AuthContext} from '../../context/AuthContext'
import Button from '../../components/Button';

import axios from 'axios';
import {BASE_URL} from '../../config';

const Contact = ({navigation}) => {

  
  const {userInfo, studentInfo} = React.useContext(AuthContext);

  const [headline, setHeadline] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSendContact = (headline, message) => {
    axios.post(`${BASE_URL}/Contact/create-contact.php`,{headline, message},
      {
      headers: {Authorization: `Bearer ${userInfo.access_token}`},
      },
    ).then(res => {

      // Handle success response
      console.log(res.data);
      // Show success message to the user
      alert('Your message has been sent successfully!');
      // Clear the input fields
      setHeadline('');
      setMessage('');
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
            For any feedback, Please enter the information below.
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.label}>
            Your name
          </Text>
          <TextInput
            style={styles.input}
            value={studentInfo.first_name + ' ' + studentInfo.last_name}
            editable={false}  
          />
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>
            Your ID
          </Text>
          <TextInput
            style={styles.input}
            value={userInfo.id_user}
            editable={false}  
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>
            Headline
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setHeadline(text)}
            value={headline}
            placeholder="Headline"
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>
            Message
          </Text>
          <View style={{padding: 15}}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              maxLength={255}
              placeholder={'Type your message here...'}
              onChangeText={(text) => setMessage(text)}
              value={message}
            />
          </View>
        </View>
        <View>
        <Button 
              title = "Send"
              style = {styles.button}
              onPress={() => {
                  handleSendContact(headline, message);
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
  textareaContainer: {
    height: 150,
    padding: 5,
    backgroundColor: 'rgb(249,250,255)',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 110,
    fontSize: 14,
  },
  button: {
    padding: 15,
  }
});



export default Contact;