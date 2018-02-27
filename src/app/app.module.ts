import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler,NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//mask
import {Ionic2MaskDirective} from "ionic2-mask-directive";
//service
import {Local} from '../service/local'

//components
import {SlidePage,
        SugnPage,  
        RegistrPage,
        RegCodePage,
        HomePage,
        MyApp,
        CodeTelphonePage,
        CodeMailPage,
      
      } from '../pages/barrel'

@NgModule({
  declarations: [
    Ionic2MaskDirective,
    MyApp,
    HomePage,
    SlidePage,
    SugnPage,
    RegistrPage,
    RegCodePage,
    CodeTelphonePage,
    CodeMailPage,
  ],
  imports: [
 
    BrowserModule,
    IonicModule.forRoot(MyApp),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SlidePage,
    SugnPage,
    RegistrPage,
    RegCodePage,
    CodeTelphonePage,
    CodeMailPage,
  ],
  providers: [
    Local,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
