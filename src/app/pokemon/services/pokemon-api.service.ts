import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import {
  pokemonAll,
  Result,
  smallPokemon,
} from '../interfaces/pokemon.interface';

@Injectable()
export class PokemonAPIService {
  private urlAPI = 'https://pokeapi.co/api/v2';
  constructor(private _http: HttpClient) {}

  getAllPokemon() {
    return this._http
      .get<pokemonAll>(`${this.urlAPI}` + '/pokemon?limit=100')
      .pipe(pluck('count', 'next', 'previous'));
  }
}
