import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(pokemons: Pokemon[], page: number): Pokemon[] {
    return pokemons.slice(page, page + 5);
  }
}