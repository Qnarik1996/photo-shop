import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage, EditPage, OrderPage, PhotoPage } from '../barrel';





@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav)nav:Nav 
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }
 
  rootPage=HomePage;
  pages=[
    {
      pageName:"Edit Profile",
      component:EditPage
    },
    {
      pageName:"Home",
      component:HomePage
    },
    
    {
      pageName:"Photo",
      component: PhotoPage
    },
    {
      pageName:"Order",
      component:OrderPage
    }
  ]
  openPage(page){
      this.nav.setRoot(page.component)
    }
  }


