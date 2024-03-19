const totalPokemon = 1302; // according to site

export const pokeIds = {
  *[Symbol.iterator]() {
    let id = 0;

    while (id < totalPokemon) {
      yield ++id;
    }
  }
};
