import React from 'react';
import { PokemonType } from '../utils/models';
import { BackDrop } from './BackDrop';
import { PokeArtList } from '../figures/PokeArtList';
import { PokeTitle } from '../widgets/PokeTitle';

export const DetailScreen = ({ route }: any) => {
  const { pokemon } = route.params as { pokemon: PokemonType };
  return (
    <BackDrop>
      <PokeArtList pokemon={pokemon} />
      <PokeTitle pokemon={pokemon} />
    </BackDrop>
  );
};
