import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createStackNavigator();

enum Screens {
  HOME = 'Home',
  DETAILS = 'Details'
}

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
