import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoPage, FramePage } from '../barrel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any[];
  constructor(public navCtrl: NavController ) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      {name:'Photo',component:PhotoPage},
      {name:'Frame',component:FramePage},
    ];
  }

getItems(ev: any) {
  this.initializeItems();
  let val = ev.target.value;
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
appPage(page){
  this.navCtrl.setRoot(page.component,{'pageName':page.name})
}
}
