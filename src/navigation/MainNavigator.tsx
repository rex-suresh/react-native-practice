import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './Screens';

const MainStack = createStackNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name={Screens.DETAILS} component={DetailScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
);
