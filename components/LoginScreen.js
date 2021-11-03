import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import SpotifyAuth from './SpotifyAuth';
import AppleMusicAuth from './AppleMusicAuth';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Qcollab</Text>
        <Text style={styles.textSubHeader}>Collab with your friends</Text>
      </View>
      <View style={styles.container}>
        <SpotifyAuth />
        <AppleMusicAuth />
        <Button>Test</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    marginTop: 40,
  },
  textHeader: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 40,
  },
  textSubHeader: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
