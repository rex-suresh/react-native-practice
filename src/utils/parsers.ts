import { PokemonType } from './models';

export const parsePokemon = (pokeData: any): PokemonType => ({
  id: pokeData.id,
  name: pokeData.name,
  mainImage: pokeData.sprites?.other['official-artwork']?.front_default
});

export const capitalize = (text: string) => {
  const [firstLetter, ...rest] = text;
  return `${firstLetter.toUpperCase()}${rest.join('').toLowerCase()}`;
};
