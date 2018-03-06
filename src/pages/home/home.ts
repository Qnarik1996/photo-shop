import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoPage, FramePage } from '../barrel';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any[];
 
  constructor(public navCtrl: NavController,public modalCtrl:ModalController ) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      {name:'Photos',component:PhotoPage},
      {name:'Frames',component:FramePage},
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
  let modal=this.modalCtrl.create(page.component,{'pageName':page.name});
    modal.present();
}

}
