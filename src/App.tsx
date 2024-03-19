import React from 'react';
import { MainNavigator } from './navigation/MainNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchInterval: 1000 * 60 * 60 } }
});

export const App = () => (
  <SafeAreaView style={styles.screen}>
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  }
});
