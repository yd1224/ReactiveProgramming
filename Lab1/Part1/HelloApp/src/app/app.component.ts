import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [FormsModule],
  template: `<label>Введіть назву:</label>
<input [(ngModel)]="name" placeholder="name">
<h1>Ласкаво просимо {{name}}!</h1>`
})
export class AppComponent {
  name = '';
}
