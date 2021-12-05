import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { SearchModule } from './pages/search/search.module';

@NgModule({
  imports: [BrowserModule, FormsModule,SearchModule],
  declarations: [AppComponent, TitleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
