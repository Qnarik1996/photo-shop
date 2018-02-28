import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SlidePage, RegCodePage, MenuPage } from '../pages/barrel';
import { Local } from '../service/local';
@Component({
  templateUrl: 'app.html'
})
///
export class MyApp {
  rootPage: any
  ngOnInit() {
    let kod= JSON.parse(localStorage.getItem('kod'))  
    
      if (kod) {
        this.rootPage = MenuPage;
        console.log("home");        
      } else {
      this.rootPage = SlidePage
      console.log("slide");      
    }
  }
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public local: Local) {
    platform.ready().then(() => {


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

