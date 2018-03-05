import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import { PhotoPage, FramePage } from '../barrel';


@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.pageName=this.navParams.get('pageName')
  }

  back(){
    this.navCtrl.pop()
  }
  photo(){
    let photo=this.modalCtrl.create(PhotoPage);
    photo.present();
  }
  frame(){
    let frame=this.modalCtrl.create(FramePage);
    frame.present();
  }
  }  

