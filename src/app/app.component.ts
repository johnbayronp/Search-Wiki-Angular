import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article } from './pages/search/model/wikiResponse.model';
import { WikiAPiService } from './pages/search/services/wikiApi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Search WikiAPI';
  articles$: Observable<Article[]>;

  constructor(private wikiAPI: WikiAPiService) {}

  onSearch(term: string): void {
    this.articles$ = this.wikiAPI.search(term);
  }
}
