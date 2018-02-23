import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Slide } from 'ionic-angular/components/slides/slide';
import { SugnPage } from '../barrel';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  @ViewChild(Slides) slides:Slides;
  buttonText="Done";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToSlide() {
    this.slides.slideNext(500);
    this.start();
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex>1){
      this.buttonText="Start";
     
    }
    else{
      this.buttonText="Done"
    }
    
  }
  start(){
    if(this.buttonText=="Start"){
      this.navCtrl.setRoot(SugnPage)
    }
  }

}
