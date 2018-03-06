import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-frame-choose',
  templateUrl: 'frame-choose.html',
})
export class FrameChoosePage {
  pageName;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public vewCtrl:ViewController
              ) {
                this.pageName=this.navParams.get('pageName')
  }

  close(){
    this.vewCtrl.dismiss()
  }

}
