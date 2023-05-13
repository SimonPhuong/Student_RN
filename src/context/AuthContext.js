import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [studentInfo, setStudentInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false); 

    const handleLogin = (id_user, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/login.php`, { id_user, password })
        .then(res => {
            const userInfo = res.data.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('access_token', JSON.stringify(userInfo));
            
            setIsLoading(false);
        })
        .catch (error => {
            console.error(error);
            setIsLoading(false);
        });
    };
    const handleLogout = () => {
        axios.post(`${BASE_URL}/logout.php`,{},
            {
            headers: {Authorization: `Bearer ${userInfo.access_token}`},
            },
        )
        .then(res => {
            console.log(res.data.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
        })
        .catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
        });
    };

    const checkLoginStatus = async () => {
        try {
          setSplashLoading(true);
    
          const userInfo = await AsyncStorage.getItem('userInfo');
          userInfo = JSON.parse(userInfo);
    
          if (userInfo) {
            setUserInfo(userInfo);
          }
    
          setSplashLoading(false);
        } catch (e) {
          setSplashLoading(false);
          console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        checkLoginStatus();
        
    }, []);
    useEffect(() => {
        if (Object.keys(userInfo).length > 0) {
          axios
            .get(`${BASE_URL}/get-info-student.php`, {
              headers: { Authorization: `Bearer ${userInfo.access_token}` },
            })
            .then((res) => {
              const studentInfo = res.data.data;
              console.log(res.data.data);
              setStudentInfo(studentInfo);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error(error);
              setIsLoading(false);
            });
        }
      }, [userInfo]);
    return (
        <AuthContext.Provider
        value={{
            isLoading,
            userInfo,
            splashLoading,
            studentInfo,
            handleLogin,
            handleLogout,
        }}>
        {children}
        </AuthContext.Provider>
    );
};
