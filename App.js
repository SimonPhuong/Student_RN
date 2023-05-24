import React from 'react'
import {AuthProvider} from './src/context/AuthContext'
import Navigation from './src/navigations/Navigation'


const App = () => {
  return (
    
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    
  );
};

export default App;
