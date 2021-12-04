import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-header',
  template: `
  <div class="header">
    <h1>{{nombre}}</h1>
  <div>
  `,
  styles: [
    `
    .header {
      background-color:purple;
      color:white;
      display:flex;
      justify-content:center;
      font-family:'Poppins', sans-serif;
    }
  `,
  ],
})
export class TitleComponent {
  @Input() nombre: string;
}
