import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { pokeIds } from '../dataGenerators/pokemonIdIterator';
import { LogoArt } from '../figures/LogoArt';
import { PokeCard } from './PokeCard';

export const PokeList = () => (
  <FlatList
    data={[...pokeIds]}
    renderItem={pokemonId => <PokeCard pokeID={pokemonId.item} />}
    ListHeaderComponent={LogoArt}
    contentContainerStyle={styles.list}
    directionalLockEnabled
  />
);

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
