import React, {useContext, useState} from 'react';
import {  View, 
          Text,  
          StatusBar, 
          StyleSheet, 
          KeyboardAvoidingView,
          TouchableWithoutFeedback,
          Keyboard,
          Image } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
// import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
// import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  
  const [id_user, setId] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin} = useContext(AuthContext);

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'}/>
      
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.container}>
            <View style={styles.headerTitle}>
              <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={require('../../assets/logo.png')}/>
              </View>
            </View>

            <View style={styles.content}>
              <View style={styles.titleContent}>
                <Text style={styles.title}>
                  Vui lòng đăng nhập tài khoản
                </Text>
              </View>
              <View style={styles.form}>
                <TextInput
                  value={id_user}
                  placeholder="ID User"
                  icon={require('../assets/images/account/account.png')}
                  onChangeText={(text) => setId(text)}
                  
                />
                <TextInput
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                  icon={require('../assets/images/password/password.png')}
                  onChangeText={(text) => setPassword(text)}
                />
                <Button 
                      title = "Login"
                      onPress={() => {
                          handleLogin(id_user, password);
                      }}>
                </Button>
              </View>
            </View>
            
          </View>
        </KeyboardAvoidingView>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(16, 103, 214, 0.8)',
  },

  headerTitle: {
    marginTop: 25,
    padding: 50,
    flex: 1,
  },

  content: {
    backgroundColor: '#fff',
    flex: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
    alignItems: 'center',
  },

  titleContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },  

  logo: {
    width: 360,
    height: 80,
    resizeMode: 'stretch',
  },

  title: {
    color: '#696969',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 12,
    opacity: 0.7,
  },

  bodyContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },

});

export default LoginScreen;
