import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent implements OnInit {
  constructor(private pokemonService: PokemonAPIService) {}

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(console.log);
  }
}
