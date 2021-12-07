import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';
import { smallPokemon } from '../interfaces/pokemon.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent implements OnInit {
  constructor(private pokemonService: PokemonAPIService) {}
  pokemon$: Observable<smallPokemon>;

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getAllPokemon().subscribe();
  }
}
