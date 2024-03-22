export type PokemonType = {
  name: string;
  id: number;
  mainImage: string;
  otherImages: string[];
  types: string[];
  stats: string[][];
};

export type PokemonProp = { pokemon: PokemonType };
