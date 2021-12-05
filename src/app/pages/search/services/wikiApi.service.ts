import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { Article, wikiResponse } from '../model/wikiResponse.model';

@Injectable({ providedIn: 'root' })
export class WikiAPiService {
  api: string;
  constructor(private _http: HttpClient) {
    this.api =
      'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';
  }

  search(find: string): Observable<Article[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: find,
      utf8: '1',
      origin: '*',
    };

    return this._http
      .get<wikiResponse>(this.api, { params })
      .pipe(pluck('query', 'search'));
  }
}
