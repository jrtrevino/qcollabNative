import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './components/LoginScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return <LoginScreen />;
};

export default App;
