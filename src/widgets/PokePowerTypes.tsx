import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonProp } from '../utils/models';
import { capitalize, getColor } from '../utils/parsers';

export const PokePowerTypes = ({ pokemon }: PokemonProp) => (
  <View style={styles.typeContainer}>
    {pokemon.types.map(item => (
      <View style={styles.typeBox} key={item}>
        <Text style={[styles.pokeType, { backgroundColor: getColor(item) }]}>
          {capitalize(item)}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
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
