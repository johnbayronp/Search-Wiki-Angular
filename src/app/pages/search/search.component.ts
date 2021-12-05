import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `<form>
  <div class="form-field">
    <input
      [formControl]="inputSearch"
      type="text"
      placeholder="Buscar en Wikipedia..."
    />
  </div>
</form>
`,
  styles: [
    `input {
    color: purple;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    border-width: 1px;
    border-color: purple;
    padding: 10px;
    width: 80%;
  }
  `,
  ],
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.onChange();
  }

  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string) => search.trim()), //elimina los espacio de la busqueda
        debounceTime(350), // espera 350ms antes de emitir
        distinctUntilChanged(), //Verifica el valor que ha emitido si es igual no emite NodeFlags
        filter((search: string) => search !== ''), //filtra que la busqueda no venga vacia
        tap((search: string) => this.submitted.emit(search))
      )
      .subscribe();

    /*  Diferencia
    this.inputSearch.valueChanges
      .pipe(tap((res) => this.submitted.emit(res)))
      .subscribe(); */
  }
}
