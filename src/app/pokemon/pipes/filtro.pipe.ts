import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(pokemons: Pokemon[], page: number, search: string = ''): Pokemon[] {
    if (pokemons.length === 0) return pokemons.slice(page, page + 5);
    // slice te permite tomar dos partes desde un array posicion inicial y posicion final [0,1,2,3,4] => slice(0,5)

    const filteredPokemons = pokemons.filter((poke) =>
      poke.name.includes(search)
    );
    // .filter( obj => obj.name) , la funcion includes indica si ese string include alguna letra

    return filteredPokemons.slice(page, page + 5);
  }
}
