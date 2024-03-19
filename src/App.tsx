import React from 'react';
import { MainNavigator } from './navigation/MainNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';

export const App = () => (
  <SafeAreaView style={styles.screen}>
    <MainNavigator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  }
});
