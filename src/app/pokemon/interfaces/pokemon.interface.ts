export interface pokemonAll {
  count: number;
  next: null;
  previous: null;
  results: smallPokemon[];
}

export interface smallPokemon {
  name: string;
  url: string;
}

export interface smallPokemon {
  id: string;
  name: string;
  pic: string;
}
