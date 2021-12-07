import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Pokemon,
  pokemonAll,
  smallPokemon,
} from '../interfaces/pokemon.interface';

@Injectable()
export class PokemonAPIService {
  private urlAPI = 'https://pokeapi.co/api/v2';
  constructor(private _http: HttpClient) {}

  getAllPokemon() {
    return this._http
      .get<pokemonAll>(`${this.urlAPI}` + '/pokemon?limit=100')
      .pipe(map(this._transformPokemon));

    // map me permite modificar lo que deseo enviar,
    /*
      Ejemplo: Si me llega 
      const datosJSON = {
        "count":string,
        "city":number,
        "salud":string,
        "results": Array[]
      }      
        Puedo devolver en solo results haciendo un map en ves de pluck
        observable.pipe( map( datosJSON => datosJSON.results))

        De tal manera que cuando se subscriban solo llegara el campo results

        servicio.function.subscribe(); // { results:}
      
      */
  }

  private _transformPokemon(resp: pokemonAll): Pokemon[] {
    const pokemonList: Pokemon[] = resp.results.map((pokemon) => {
      return {
        id: '1',
        name: pokemon.name,
        pic: 'angie.url/photo.jpg',
      };
    });

    return pokemonList;
  }
}
