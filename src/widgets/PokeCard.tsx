import React, { memo, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PokeArt } from '../figures/PokeArt';
import { requestPokemon } from '../API/network';
import { useQuery } from '@tanstack/react-query';
import { parsePokemon } from '../utils/parsers';
import { PokemonType } from '../utils/models';

type PokeCardParams = {
  pokeID: number;
};

const pokeCardWidth = 170;

export const PokeCard = memo(({ pokeID }: PokeCardParams) => {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const { data, isLoading } = useQuery({
    queryKey: [`pokemon-${pokeID}`],
    queryFn: () => requestPokemon(pokeID)
  });

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
    <View style={styles.card}>
      <PokeArt imageUrl={pokemon.mainImage} />
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.pokeTitle}>
        {pokemon.name}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    width: pokeCardWidth,
    height: 200,
    backgroundColor: 'rgba(110,110,110,0.1)',
    borderRadius: 20,
    margin: 5,
    padding: 10
  },
  pokeTitle: {
    fontWeight: '600',
    textAlign: 'center'
  }
});
