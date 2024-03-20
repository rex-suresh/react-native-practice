import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { requestPokemon } from '../API/network';
import { PokeArt } from '../figures/PokeArt';
import { Screens } from '../navigation/Screens';
import { PokemonType } from '../utils/models';
import { parsePokemon } from '../utils/parsers';
import { PokeTitle } from './PokeTitle';

type PokeCardParams = {
  pokeID: number;
};

const pokeCardWidth = 170;

export const PokeCard = memo(({ pokeID }: PokeCardParams) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const navigation = useNavigation<any>();

  const { data, isLoading } = useQuery({
    queryKey: [`pokemon-${pokeID}`],
    queryFn: () => requestPokemon(pokeID)
  });

  const navigateToDetail = () => {
    navigation.navigate(Screens.DETAILS, { pokemon });
  };

  useEffect(() => {
    if (data) {
      setPokemon(parsePokemon(data));
    }
  }, [data]);

  if (!pokemon || isLoading) {
    return (
      <View style={styles.card}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Pressable onPress={navigateToDetail}>
      <View style={styles.card}>
        <PokeArt imageUrl={pokemon.mainImage} />
        <PokeTitle pokemon={pokemon} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    width: pokeCardWidth,
    height: 200,
    backgroundColor: 'rgba(110,110,110,0.5)',
    borderRadius: 20,
    margin: 5,
    padding: 10
  }
});
