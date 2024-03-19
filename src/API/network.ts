const request = (method: string, url: string) => fetch(url, { method });

// Network Methods
const get = (url: string) => request('GET', url);
// export const post = (url: string) => request('POST', url);

// Routes
const pokemonRoute = (pokeId: number) =>
  `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

export const requestPokemon = async (pokeId: number) => {
  return (await get(pokemonRoute(pokeId))).json();
};
