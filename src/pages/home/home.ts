import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController ) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Photo',
      'Frame',
    ];
  }

getItems(ev: any) {
  this.initializeItems();
  let val = ev.target.value;
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
}
