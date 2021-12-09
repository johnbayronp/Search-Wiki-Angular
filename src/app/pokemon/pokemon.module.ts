import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [PokemonlistComponent, FiltroPipe],
  exports: [PokemonlistComponent, FiltroPipe],
})
export class PokemonModule {}
