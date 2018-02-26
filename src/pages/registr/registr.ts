import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { RegCodePage } from '../barrel';


@Component({
  selector: 'page-registr',
  templateUrl: 'registr.html',
})
export class RegistrPage {
requiredList;
name;
tel;
email;
password1;
password2;
chenge:boolean=false

public mask = ['+','(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/,  '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder:FormBuilder,
              public modalCtrl:ModalController,
              
    ) {}

ngOnInit(){
  this.requiredList=this.formBuilder.group({
    name:['',Validators.compose([Validators.required])],
    telPhone:['',Validators.compose([Validators.required])],
    email:['',Validators.compose([Validators.required,Validators.email])],
    password1:['',Validators.compose([Validators.required])],
    password2:['',Validators.compose([Validators.required])],
  })
}
sign(){
  let modal = this.modalCtrl.create(RegCodePage);
  modal.present();
}
chengecolor(){
  this.chenge = true
}
}
