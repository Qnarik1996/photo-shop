import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../barrel';
import { Local } from '../../service/local';

@Component({
  selector: 'page-code-telphone',
  templateUrl: 'code-telphone.html',
})
export class CodeTelphonePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public vewCtrl:ViewController,
    public formbulders: FormBuilder,
    public local: Local
    ) {
}
mailKode
public mask = [ /\d/, /\d/,  /\d/, /\d/]
back(){
this.vewCtrl.dismiss()

}
form
  ngOnInit(){
    this.form=this.formbulders.group({
      kod:['',Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])]
    })
  }
  openHome(){
    this.local.set("kod", this.mailKode )
    this.navCtrl.setRoot(HomePage)
  }




}
