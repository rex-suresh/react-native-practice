import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PokemonType } from '../utils/models';
import { PokeArtContainer } from './PokeArt';

type PokeArtListProp = {
  pokemon: PokemonType;
};

export const PokeArtList = ({ pokemon }: PokeArtListProp) => {
  return (
    <FlatList
      data={[pokemon.mainImage, ...pokemon.otherImages]}
      renderItem={pokeImage => <PokeArtContainer imageUrl={pokeImage.item} />}
      keyExtractor={(item, _index) => item}
      contentContainerStyle={styles.imageList}
      horizontal
      directionalLockEnabled
    />
  );
};

const styles = StyleSheet.create({
  imageList: {
    gap: 10,
    margin: 10
  }
});
