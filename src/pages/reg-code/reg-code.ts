import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';
import { CodeMailPage } from '../barrel';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-reg-code',
  templateUrl: 'reg-code.html',
})
export class RegCodePage {
bool;
a;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public viewCtrl:ViewController,
               public modalCtrl:ModalController
              ) {}
back(){
  this.navCtrl.pop()
}
codeMail(){
  this.bool=true;
  this.a=true
  this.viewCtrl.dismiss([this.bool,this.a]);
}
codePhone(){
  this.a=false;
  this.bool=true;
  this.viewCtrl.dismiss([this.bool,this.a]);
}
}
