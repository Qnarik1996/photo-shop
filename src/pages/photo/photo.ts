import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  pageName;
  count=1;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl:ViewController) {
    this.pageName=this.navParams.get('pageName')
  }

  next(){
    this.count++;
    }
    back(){
      if(this.count !== 1){
        this.count--;
      }
    }
    closer(){
      this.viewCtrl.dismiss()
    }
}
