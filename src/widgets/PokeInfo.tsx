import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonType } from '../utils/models';
import { capitalize, getColor } from '../utils/parsers';

const PokePowerTypes = ({ pokemon }: { pokemon: PokemonType }) => (
  <View style={styles.typeContainer}>
    {pokemon.types.map(item => (
      <View style={styles.typeBox}>
        <Text style={[styles.pokeType, { backgroundColor: getColor(item) }]}>
          {capitalize(item)}
        </Text>
      </View>
    ))}
  </View>
);

export const PokeGeneralInfo = ({ pokemon }: { pokemon: PokemonType }) => (
  <View style={styles.container}>
    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.pokeTitle}>
      {capitalize(pokemon.name)}
    </Text>
    <PokePowerTypes pokemon={pokemon} />
  </View>
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
    marginHorizontal: 15
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
