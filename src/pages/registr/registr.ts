import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { RegCodePage, CodeMailPage, CodeTelphonePage } from '../barrel';
import { Local } from '../../service/local';


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

modalPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder:FormBuilder,
              public modalCtrl:ModalController,
              private local:Local
              
    ) { }

ngOnInit(){

  this.requiredList=this.formBuilder.group({
    name:['',Validators.compose([Validators.required])],
    telPhone:['',Validators.compose([Validators.required,Validators.pattern('[(][+][0-9]{3}[)][0-9]{2}[-][0-9]{2}[-][0-9]{2}[-][0-9]{2}')])],
    email:['',Validators.compose([Validators.required,Validators.email])],
    password1:['',Validators.compose([Validators.required])],
    password2:['',Validators.compose([Validators.required])],
  })
}
sign(){
  this.local.set('name',this.name);
  this.local.set('telPhone',this.tel);
  this.local.set('email',this.email);
  this.local.set('password',this.password1);
  this.modal()
}
modal(){
  let modal = this.modalCtrl.create(RegCodePage);
  modal.onWillDismiss((data) => {
    if(data){
      if(data[1]){
        let codeMail=this.modalCtrl.create(CodeMailPage);
        codeMail.present()
      }else{
        let codePhone=this.modalCtrl.create(CodeTelphonePage);
        codePhone.present()
      }
     
    }
});
modal.present();
}
}


