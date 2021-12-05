import { Component, OnInit } from '@angular/core';
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

  constructor(private wikiAPI: WikiAPiService) {
    this.wikiAPI.search('angular').subscribe((e) => console.log(e));
  }

  ngOnInit() {
    //this.inputSearch.valueChanges.pipe(tap((e) => console.log(e))).subscribe();
  }
}
