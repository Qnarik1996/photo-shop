import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { RegistrPage } from '../barrel';

@Component({
  selector: 'page-sugn',
  templateUrl: 'sugn.html',
})
export class SugnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registration(){
    this.navCtrl.setRoot( RegistrPage)
  }

}
