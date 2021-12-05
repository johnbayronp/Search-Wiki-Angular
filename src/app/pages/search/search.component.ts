import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  inputSearch: FormControl;

  constructor() {}

  ngOnInit() {
    this.inputSearch.valueChanges.pipe(tap((e) => console.log(e))).subscribe();
  }
}
