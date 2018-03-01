import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageName=this.navParams.get('pageName')
  }


}
