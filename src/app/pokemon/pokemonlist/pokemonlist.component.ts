import { Component, OnInit } from '@angular/core';
import { Pokemon, smallPokemon } from '../interfaces/pokemon.interface';
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent implements OnInit {
  constructor(private pokemonService: PokemonAPIService) {}
  pokemons: Pokemon[];

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
