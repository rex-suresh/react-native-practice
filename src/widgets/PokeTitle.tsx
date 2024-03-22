import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { PokemonProp } from '../utils/models';
import { capitalize } from '../utils/parsers';

export const PokeTitle = ({
  pokemon,
  style
}: PokemonProp & {
  style?: TextStyle;
}) => (
  <Text
    numberOfLines={2}
    ellipsizeMode="tail"
    style={[styles.pokeTitle, style]}>
    {capitalize(pokemon.name)}
  </Text>
);

const styles = StyleSheet.create({
  pokeTitle: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20
  }
});
