import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { FrameChoosePage } from '../barrel';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'page-frame',
  templateUrl: 'frame.html',
})
export class FramePage {
  ngOnInit(){
   this.openPage()
  }
pageName;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
               public modal:ModalController,
              public viewCtrl:ViewController
              ) {
    this.pageName=this.navParams.get('pageName');

    
  }

  close(){
    this.viewCtrl.dismiss()
  }
  openPage(){
    let frame=this.modal.create(FrameChoosePage,{'pageName':this.pageName});
    frame.present()
  }

}
