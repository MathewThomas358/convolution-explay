import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>	
  <h1>{{title}}</h1>
  </div>
  `
})
export class AppComponent {
  title = 'Convolution';
}
