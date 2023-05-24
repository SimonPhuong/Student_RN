import React, {useContext, useState} from 'react';
import {  View, 
          Text,  
          StatusBar, 
          StyleSheet, 
          KeyboardAvoidingView,
          TouchableWithoutFeedback,
          Keyboard,
          Image,Alert } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
// import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
// import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  
  const [id_user, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const {handleLogin} = useContext(AuthContext);

  const validateInputs = () => {
    if (id_user.trim() === '') {
      setIdError(true);
    } else {
      setIdError(false);
    }
    if (password.trim() === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
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
                  style={[
                    styles.textInput,
                    idError && { borderBottomColor: 'red' }
                  ]}
                />
                {idError && (
                  <Text style={styles.errorText}>
                    Please enter a valid ID User
                  </Text>
                )}
                <TextInput
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                  icon={require('../assets/images/password/password.png')}
                  onChangeText={(text) => setPassword(text)}
                  style={[
                    styles.textInput,
                    passwordError && { borderBottomColor: 'red' }
                  ]}
                />
                {passwordError && (
                  <Text style={[styles.errorText]}>
                    Please enter a valid Password
                  </Text>
                )}
                <Button 
                      title = "Login"
                      onPress={() => {
                        validateInputs();
                        if (!idError && !passwordError) {
                          handleLogin(id_user, password);
                        } 
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
  textInput: {
    // Your existing styles for text input
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // ...
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    paddingTop: 10,
  },
});

export default LoginScreen;
