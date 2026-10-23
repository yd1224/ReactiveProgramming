import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [FormsModule],
  template: `<div [class.isredbox]="isRed"></div>
<div [class.isredbox]="!isRed"></div>
<input type="checkbox" [(ngModel)]="isRed">
<div [class]="blue"></div><br><br>
<div [style.backgroundColor]="isyellow ? 'yellow' : 'blue'"></div>
<div [style.background-color]="!isyellow ? 'yellow' : 'blue'"></div>
<input type="checkbox" [(ngModel)]="isyellow">`,
  styles: [`div { width: 50px; height: 50px; border: 1px solid #ccc; }
.isredbox { background-color: red; }
.isbluebox { background-color: blue; }`]
})
export class AppComponent {
  isRed = false;
  isyellow = false;
  blue = 'isbluebox';
}
