import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonAPIService {
  private urlAPI = 'https://pokeapi.co/api/v2';
  constructor(private _http: HttpClient) {}

  getAllPokemon(): Observable<any> {
    return this._http.get<any>(`${this.urlAPI}` + '/pokemon?limit=1500');
  }
}
