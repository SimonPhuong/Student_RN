import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const handleLogin = (id_user, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login.php`, { id_user, password })
      .then(res => {
        const responseUserInfo = res.data.data;
        console.log(responseUserInfo);
        setUserInfo(responseUserInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(responseUserInfo));

        setIsLoading(false);
      })
      .catch(error => {
        Alert.alert('Message', 'Invalid account!');
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    axios
      .post(
        `${BASE_URL}/logout.php`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then(res => {
        console.log(res.data.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(error => {
        console.log(`logout error ${error}`);
        setIsLoading(false);
      });
  };

  const checkLoginStatus = async () => {
    try {
      setSplashLoading(true);

      const storedUserInfo = await AsyncStorage.getItem('userInfo');
      const parsedUserInfo = JSON.parse(storedUserInfo);

      if (parsedUserInfo) {
        setUserInfo(parsedUserInfo);
      }

      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      console.log(`is logged in error ${error}`);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
