import { type PokemonType } from './models';

export const parsePokemon = (pokeData: any): PokemonType => ({
  id: pokeData.id,
  name: pokeData.name,
  mainImage: pokeData.sprites?.other['official-artwork']?.front_default,
  otherImages: [
    pokeData.sprites?.other['official-artwork']?.front_shiny,
    pokeData.sprites?.other?.dream_world?.front_default
  ],
  types: pokeData.types?.map(
    (entry: { type: { name: string } }) => entry?.type.name
  )
});

export const capitalize = (text: string) => {
  const [firstLetter, ...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}`;
};

const pokeTypeColors = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  unknown: '#000000',
  shadow: '#827e7a'
} as const;

type PokePowerType = keyof typeof pokeTypeColors;

export const mapTypeToColors = (pokemonTypes: string[]) => {
  const colors = pokemonTypes.map(item => getColor(item));

  if (colors.length < 2) {
    colors.push('white');
  }
  return colors;
};

export const getColor = (pokemonType: string) => {
  return (pokeTypeColors[pokemonType as PokePowerType] as string) || 'white';
};
