import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WikiAPiService {
  api: string;
  constructor(private _http: HttpClient) {
    this.api =
      'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';
  }

  search(find: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: find,
    };

    return this._http.get<any>(this.api, { params });
  }
}
