import { PokemonType } from './models';

export const parsePokemon = (pokeData: any): PokemonType => ({
  id: pokeData.id,
  name: pokeData.name,
  mainImage: pokeData.sprites?.other['official-artwork']?.front_default
});
