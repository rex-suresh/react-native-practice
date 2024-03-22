import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { type PokemonType } from '../utils/models';
import { PokeArtContainer } from './PokeArt';

type PokeArtListProp = {
  pokemon: PokemonType;
};

export const PokeArtList = ({ pokemon }: PokeArtListProp) => (
  <FlatList
    data={[pokemon.mainImage, pokemon.shinyImage]}
    renderItem={pokeImage => <PokeArtContainer pokemon={pokeImage.item} />}
    keyExtractor={(item, _index) => item}
    contentContainerStyle={styles.imageList}
    style={styles.container}
    horizontal
    directionalLockEnabled
  />
);

const styles = StyleSheet.create({
  imageList: {
    margin: 10
  },
  container: {
    maxHeight: 250,
    marginBottom: 20
  }
});
