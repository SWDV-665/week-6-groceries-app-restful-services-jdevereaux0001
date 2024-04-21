import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Cheese",
      quantity: 4
    },
  ];
  getItems() {
    return this.items;
  }
  removeItem(_index: any) {
    this.items.splice(_index);
  }
  addItem(_item: any) {
    this.items.push(_item);
  }
  editItem(_item: any, _index: any) {
    this.items[_index] = _item;
  }

  constructor() { }
}
