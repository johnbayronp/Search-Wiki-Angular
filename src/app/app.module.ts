import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { SearchModule } from './pages/search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModule } from './pages/article/article.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SearchModule,
    HttpClientModule,
    ArticleModule,
  ],
  declarations: [AppComponent, TitleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
