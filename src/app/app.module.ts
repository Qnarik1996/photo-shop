import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler,NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//mask
import {Ionic2MaskDirective} from "ionic2-mask-directive";
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
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
        MenuPage,
        EditPage,
        PhotoPage,
        OrderPage,
        OtherHeader,
        FramePage
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
    MenuPage,
    EditPage,
    PhotoPage,
    OrderPage,
    OtherHeader,
    FramePage
  ],
  imports: [
 
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode:'ios'
    }),
    FormsModule,
    TextMaskModule
 
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
    MenuPage,
    EditPage,
    PhotoPage,
    OrderPage,
    OtherHeader,
    FramePage
  ],
  providers: [
    Local,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
