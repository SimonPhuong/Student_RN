import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      // Do something after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout); // Clean up the timeout when the component unmounts
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#06bcee' }}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default SplashScreen;