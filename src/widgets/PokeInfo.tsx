import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PokemonProp } from '../utils/models';
import { PokeTitle } from './PokeTitle';
import { PokePowerTypes } from './PokePowerTypes';
import { PokemonStats } from './PokemonStats';

export const PokeGeneralInfo = ({ pokemon }: PokemonProp) => (
  <>
    <View style={styles.container}>
      <PokeTitle pokemon={pokemon} style={styles.pokeTitle} />
      <PokePowerTypes pokemon={pokemon} />
    </View>
    <PokemonStats pokemon={pokemon} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pokeTitle: {
    fontWeight: '600',
    fontSize: 24,
    padding: 10,
    marginHorizontal: 15,
    textAlign: 'left',
    maxWidth: '50%'
  },
  typeContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 8
  },
  typeBox: {
    borderRadius: 20,
    overflow: 'hidden'
  },
  pokeType: {
    fontWeight: '500',
    fontSize: 16,
    padding: 8
  }
});
