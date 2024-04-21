import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  template:`
   <select [(ngModel)]="firstSelectValue">
    <option *ngFor="let opt of firstSelectOptions" [value]="opt">
       {{ opt }}
    </option>
   </select> 
  `,
})

export class Tab1Page {
  [x: string]: any;

  title = "Grocery";
  
  private opts = [
    { key: 'one', value: [1,2,3,4,5,6,7,8,9,10] }
  ];
  
  firstSelectValue = 'one';

  get firstSelectOptions() {
    return this.opts.map(({key}) => key);
  }
  items = [
    {
      name: "Milk",
      quantity: 2
    },
  ];
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public toastCtrl: ToastController,
              public dataService: GroceriesServiceService) {}

  async loadItems() {
    this.dataService.getItems();
  }
  async removeItem(item: any, index: any) {
    console.log("Successfully removed item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Successfully removed item - " + item.name + " - from the list.",
      duration: 3000
    }); 
    (await toast).present();
    this.items.splice(index, 1);
  }
  async addItem() {
    console.log("Adding item");
    this.showAddItemPrompt();
  }
  async editItem(item: any, index: any) {
    console.log("Successfully edited item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Successfully edited item - " + item.name + "  ",
      duration: 3000
    }); 
    (await toast).present();
    this.showEditItemPrompt(item ,index);
  }
  async shareItem(item: any, index: any) {
    console.log("Successfully shared item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Successfully shared item - " + item.name + "  ",
      duration: 3000
    });
    (await toast).present();
  //
  //  let message = "Successfully shared item - " + item.name + "  ";
  //  let subject = "Shared via Groceries app";
  //  
  //  this.socialSharing.share(message,subject).then(() => {
  //    console.log("Shared successfully!");
  //  }).catch((error: any) => {
  //    console.log("Error while sharing", error);
  //  });
  }
  async showAddItemPrompt() {
    const prompt = this.alertCtrl.create(
      {
      header: "Add item",
      subHeader: "Please enter an item.",
      inputs: [
        {
        name: "name",
        placeholder: "Name"
        },
        {
        name: "quantity",
        placeholder: "quantity"
        },
              ],
      buttons: [
        {
        text: "Cancel",
        handler: data => {
          console.log("Cancel clicked");  }
        },
        {
        text: "Save",
        handler: item => {
          console.log("Save clicked", item);
          this.items.push(item);   }
        }
               ]
    });
    (await prompt).present();
  }

  async showEditItemPrompt(item: any, index: any) {
    const prompt = this.alertCtrl.create(
      {
      header: "Edit item",
      subHeader: "Please edit the item selected.",
      inputs: [
        {
        name: "name",
        placeholder: "Name",
        value: item.name
        },
        {
        name: "quantity",
        placeholder: "Quantity",
        value: item.quantity
        },
              ],
      buttons: [
        {
        text: "Cancel",
        handler: data => {
          console.log("Cancel clicked");  }
        },
        {
        text: "Save",
        handler: item => {
          console.log("Edit clicked", item);
          this.items[index] = item;  }
        }
               ]
    }); 
    (await prompt).present();
  }
}
