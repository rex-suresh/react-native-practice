import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createStackNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="home">
      <MainStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Something' }}
      />
      <MainStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Something else' }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);
