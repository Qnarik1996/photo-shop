import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  pageName;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageName=this.navParams.get('pageName')
  }
back(){
  this.navCtrl.pop()
}


}
