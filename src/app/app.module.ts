import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonAPIService } from './pokemon/services/pokemon-api.service';
import { FiltroPipe } from './pokemon/pipes/filtro.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, PokemonModule, HttpClientModule],
  declarations: [AppComponent, TitleComponent, FiltroPipe],
  bootstrap: [AppComponent],
  providers: [PokemonAPIService],
})
export class AppModule {}
