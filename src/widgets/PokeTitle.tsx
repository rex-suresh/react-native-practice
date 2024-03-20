import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { PokemonType } from '../utils/models';
import { capitalize } from '../utils/parsers';

export const PokeTitle = ({ pokemon }: { pokemon: PokemonType }) => (
  <Text numberOfLines={2} ellipsizeMode="tail" style={styles.pokeTitle}>
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
