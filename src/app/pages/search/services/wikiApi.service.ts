import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, wikiResponse } from '../model/wikiResponse.model';

@Injectable()
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
      utf8: '1',
      srsearch: find,
    };

    return this._http
      .get<any>(this.api, { params })
      .pipe(map((e) => e.query.search));
  }
}
