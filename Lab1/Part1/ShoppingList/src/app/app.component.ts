import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Item {
  done = false;

  constructor(public purchase: string, public price: number) {}
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [FormsModule],
  template: `<div class="page-header"><h1>Shopping list</h1></div>
<div class="panel">
  <div class="form-inline">
    <input class="form-control" [(ngModel)]="text" placeholder="Назва">
    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Ціна">
    <button class="btn btn-default" (click)="addItem(text, price)">Додати</button>
  </div>
  <table class="table table-striped">
    <thead><tr><th>Предмет</th><th>Ціна</th><th>Куплено</th></tr></thead>
    <tbody>
      @for (item of items; track item) {
      <tr>
        <td>{{item.purchase}}</td><td>{{item.price}}</td>
        <td><input type="checkbox" [(ngModel)]="item.done"></td>
      </tr>
      }
    </tbody>
  </table>
</div>`
})
export class AppComponent {
  text = '';
  price: number = 0;
  items: Item[] = [
    { purchase: 'Хліб', done: false, price: 15.9 },
    { purchase: 'Вершкове масло', done: false, price: 60 },
    { purchase: 'Картопля', done: true, price: 22.6 },
    { purchase: 'Сир', done: false, price: 310 }
  ];

  addItem(text: string, price: number): void {
    if (text == null || text.trim() === '' || price == null) return;
    this.items.push(new Item(text, price));
  }
}
