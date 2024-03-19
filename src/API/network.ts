const request = (method: string, url: string) => fetch(url, { method });

// Network Methods
export const get = (url: string) => request('GET', url);
// export const post = (url: string) => request('POST', url);

// Routes
export const pokemonRoute = (pokeId: number) =>
  `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
