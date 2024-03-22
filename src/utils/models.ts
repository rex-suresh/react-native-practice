export type PokemonType = {
  name: string;
  id: number;
  mainImage: string;
  shinyImage: string;
  types: string[];
  stats: string[][];
};

export type PokemonProp = { pokemon: PokemonType };
