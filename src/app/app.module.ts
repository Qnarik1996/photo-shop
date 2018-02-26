import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//mask

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SlidePage,
        SugnPage,  
        RegistrPage,
        RegCodePage
      
      } from '../pages/barrel'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlidePage,
    SugnPage,
    RegistrPage,
    RegCodePage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TextMaskModule 
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidePage,
    SugnPage,
    RegistrPage,
    RegCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
