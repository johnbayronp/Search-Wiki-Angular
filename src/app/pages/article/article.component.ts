import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../search/model/wikiResponse.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article; //Signo de exclamacion por que no estamos inicializando esa variable

  constructor() {}

  ngOnInit() {}
}
