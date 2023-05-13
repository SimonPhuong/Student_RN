import React from 'react'
import {AuthProvider} from './src/context/AuthContext'
import Navigation from './src/navigations/Navigation'
import { TailwindProvider } from 'tailwindcss-react-native';

const App = () => {
  return (
    <TailwindProvider>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </TailwindProvider>
  );
};

export default App;
