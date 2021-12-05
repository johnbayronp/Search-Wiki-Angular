import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WikiAPiService } from './services/wikiApi.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  providers: [WikiAPiService],
  exports: [SearchComponent],
})
export class SearchModule {}
