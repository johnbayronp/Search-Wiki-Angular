import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';
import { WikiAPiService } from './services/wikiApi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor(private wikiAPI: WikiAPiService) {}

  ngOnInit() {
    this.onChange();
  }

  onChange():void {
    this.inputSearch.valueChanges
    .pipe(
      tap(res => this.submitted.emit(res))
    .subscribe();
  }
}
