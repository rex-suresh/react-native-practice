import React from 'react';
import { PokeArtContainer } from '../figures/PokeArt';
import { PageRouteProps } from '../navigation/Screens';
import { PokemonType } from '../utils/models';
import { mapTypeToColors } from '../utils/parsers';
import { BackDropGradient } from './BackDrop';
import { PokeGeneralInfo } from '../widgets/PokeInfo';
import { ScrollView } from 'react-native';

export const DetailScreen = ({ route }: PageRouteProps) => {
  const { pokemon } = route.params as { pokemon: PokemonType };
  return (
    <BackDropGradient colors={mapTypeToColors(pokemon.types)}>
      <ScrollView>
        <PokeArtContainer pokemon={pokemon} />
        <PokeGeneralInfo pokemon={pokemon} />
      </ScrollView>
    </BackDropGradient>
  );
};
