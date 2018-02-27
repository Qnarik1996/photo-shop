import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-code-telphone',
  templateUrl: 'code-telphone.html',
})
export class CodeTelphonePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public vewCtrl:ViewController
    ) {
}

back(){
this.vewCtrl.dismiss()

}



}
