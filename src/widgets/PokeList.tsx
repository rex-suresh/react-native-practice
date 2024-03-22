import React, { memo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { pokeIds } from '../dataGenerators/pokemonIdIterator';
import { LogoArt } from '../figures/LogoArt';
import { PokeCard, pokeCardWidth } from './PokeCard';

const slackWidth = 10;

export const PokeList = memo(() => {
  const { width } = Dimensions.get('window');

  return (
    <FlatList
      data={[...pokeIds]}
      renderItem={pokemonId => <PokeCard pokeID={pokemonId.item} />}
      ListHeaderComponent={LogoArt}
      contentContainerStyle={styles.list}
      numColumns={Math.floor(width / (pokeCardWidth + slackWidth))}
      keyExtractor={item => item.toString()}
      directionalLockEnabled
    />
  );
});

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
