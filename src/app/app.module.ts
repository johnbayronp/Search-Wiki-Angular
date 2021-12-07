import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PokemonModule],
  declarations: [AppComponent, TitleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
