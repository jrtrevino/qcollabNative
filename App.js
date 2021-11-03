import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from './components/LoginScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F303A',
  },
});

export default App;
