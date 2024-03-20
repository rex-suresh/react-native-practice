import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './Screens';
import { PokemonType } from '../utils/models';
import { capitalize } from '../utils/parsers';

const MainStack = createStackNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName={Screens.HOME}>
      <MainStack.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={Screens.DETAILS}
        component={DetailScreen}
        options={({ route }) => {
          // TODO : Extract this out
          const { pokemon } = route.params as { pokemon: PokemonType };
          return { title: capitalize(pokemon.name) };
        }}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);
