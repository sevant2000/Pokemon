const initialState = [
  { id: 0, name: "Pikachu", breed: "abcd", desc: "description" },
  { id: 1, name: "Bulbasaur", breed: "abcd", desc: "Overgrow" },
  { id: 2, name: "Ivysaur", breed: "abcd", desc: "Overgrow" },
  { id: 3, name: "Venusaur", breed: "abcd", desc: "Overgrow" },
  { id: 5, name: "Charmander", breed: "abcd", desc: "Overgrow" },
];

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      state = [...state, action.payload];
      return state;
    case "DELETE_POKEMON":
      const pokemonFilter = state.filter((pokemon) =>
        pokemon.id === action.payload ? null : pokemon
      );
      state = pokemonFilter;
      return state;
    case "UPDATE_POKEMON":
      const pokemonUpdate = state.filter((pokemon) =>
        pokemon.id === action.payload.id
          ? Object.assign(pokemon, action.payload)
          : pokemon
      );
      state = pokemonUpdate;
      return state;
    case "RESET_POKEMON":
      state = [{ name: null, breed: null, desc: null }];
      return state;
    default:
      return state;
  }
};
