import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-code-mail',
  templateUrl: 'code-mail.html',
})
export class CodeMailPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public vewCtrl:ViewController
              ) {
  }

  back(){
    this.vewCtrl.dismiss()

  }

}
