import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PokemonlistComponent],
  exports: [PokemonlistComponent],
})
export class PokemonModule {}
